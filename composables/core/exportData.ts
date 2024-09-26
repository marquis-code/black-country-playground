import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import Swal from "sweetalert2";
import { unparse as papaparseUnparse } from 'papaparse';
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export type ExportType = 'csv' | 'pdf' | 'excel';

export const downloadableColumns = ref([])

export function usePaginatedFetchAndDownload() {
  const isDownloading = ref(false);
  const mergedData = ref([] as Array<Record<string, any>>);
  const total_pages = ref(0);
  const error = ref(null) as Record<string, any>;
  const url = '/houses';

  async function fetchDataPage(url: string, page: number) {
    try {
      const response = await GATEWAY_ENDPOINT.get(`${url}?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch page ${page}: ${error.message}`);
    }
  }

  async function fetchAllPages(url: string) {
    isDownloading.value = true;
    error.value = null;
    mergedData.value = [];

    try {
      const firstPageData = await fetchDataPage(url, 1);
      const totalPages = firstPageData.metadata.pages;
      total_pages.value = totalPages;

      // Prepare to fetch remaining pages in parallel
      const pagePromises = [];
      for (let page = 2; page <= totalPages; page++) {
        pagePromises.push(fetchDataPage(url, page));
      }

      const allPageData = await Promise.all(pagePromises);
      console.log(allPageData, 'all pages data here')

      // Combine all data from the first page and subsequent pages
      mergedData.value = [ ...firstPageData.result, ...allPageData.flatMap(page => page.data) ];
    } catch (e) {
      useNuxtApp().$toast.error('Something went wrong while downloading report.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      error.value = e;
    } finally {
      isDownloading.value = false;
    }
  }

  async function exportPaginatedData(url: string, exportType: ExportType, fileName: string = 'export') {
    await fetchAllPages(url); // Fetch all pages before exporting
    if (!mergedData.value || mergedData.value.length === 0) {
      promptModal(exportType.toUpperCase(), 'error');
      console.error('No data available for export');
      return;
    }
    exportData(mergedData.value, exportType, fileName); // Call the export function
  }

  return { exportPaginatedData, isDownloading, error, mergedData, total_pages };
}

/**
 * Export data function
 * @param data - Array of objects to export
 * @param exportType - Type of export ('csv', 'pdf', 'excel')
 * @param fileName - Optional file name without extension
 */
export function exportData(data: Array<Record<string, any>>, exportType: ExportType, fileName: string = 'export'): void {
  if (!data || data.length === 0) {
    console.error('No data to export');
    return;
  }

  // Filter the data to include only the desired fields
  const filteredData = data.map(item => ({
    propertyName: item?.name,
    propertyType: item?.houseType?.name,
    bedroomCount: item?.bedroomCount,
    address: item?.address
  }));

  switch (exportType) {
    case 'csv':
      exportAsCSV(filteredData, fileName);
      break;
    case 'pdf':
      exportAsPDF(filteredData, fileName);
      break;
    case 'excel':
      exportAsExcel(filteredData, fileName);
      break;
    default:
      console.error('Invalid export type:', exportType);
      promptModal(exportType.toUpperCase(), 'error');
  }
}

function exportAsCSV(data: Array<Record<string, any>>, fileName: string) {
  try {
    const csv = papaparseUnparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${fileName}.csv`);
    promptModal('CSV', 'success');
  } catch (error) {
    promptModal('CSV', 'error');
    console.error('Error exporting CSV:', error);
  }
}

function exportAsPDF(data: Array<Record<string, any>>, fileName: string) {
  console.log(downloadableColumns.value, 'visible here')
  try {
    const doc = new jsPDF();
    const columns = Object.keys(data[0]);
    const rows = data.map(item => columns.map(col => item[col]));

    autoTable(doc, {
      head: [columns],
      body: rows,
    });

    doc.save(`${fileName}.pdf`);
    promptModal('PDF', 'success');
  } catch (error) {
    promptModal('PDF', 'error');
    console.error('Error exporting PDF:', error);
  }
}

function exportAsExcel(data: Array<Record<string, any>>, fileName: string) {
  try {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
    promptModal('EXCEL', 'success');
  } catch (error) {
    promptModal('EXCEL', 'error');
    console.error('Error exporting Excel:', error);
  }
}

const promptModal = (type: 'CSV' | 'PDF' | 'EXCEL', status: 'success' | 'error') => {
  Swal.fire({
    title: status === 'success' ? 'Success' : 'Error',
    text: `${type} was ${status === 'success' ? 'exported successfully' : 'not exported'}!`,
    icon: status,
    showCancelButton: false,  // Hide cancel button if not needed
    showConfirmButton: true,   // Ensure confirm button is shown
    confirmButtonText: "OK",   // Set the text for the confirmation button
    confirmButtonColor: "#3085d6",  // Optional: Set color for the confirm button
  }).then((result) => {
    if (result.isConfirmed) {
      // Handle confirmation action if needed
    }
  });
};

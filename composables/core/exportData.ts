import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import Swal from "sweetalert2";
import { unparse as papaparseUnparse } from 'papaparse';

export type ExportType = 'csv' | 'pdf' | 'excel';

/**
 * Export data function
 * @param data - Array of objects to export
 * @param exportType - Type of export ('csv', 'pdf', 'excel')
 * @param fileName - Optional file name without extension
 */
export function exportData(data: any[], exportType: ExportType, fileName: string = 'export'): void {
    switch (exportType) {
        case 'csv':
            exportAsCSV(data, fileName);
            break;
        case 'pdf':
            exportAsPDF(data, fileName);
            break;
        case 'excel':
            exportAsExcel(data, fileName);
            break;
    }
}

function exportAsCSV(data: any[], fileName: string) {
    try {
        const csv = papaparseUnparse(data);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, `${fileName}.csv`);
        promptModal('CSV', 'success')
    } catch (error) {
        promptModal('CSV', 'error')
        console.error('Error exporting CSV:', error);
    }
}

function exportAsPDF(data: any[], fileName: string) {
    try {
        const doc = new jsPDF();
        const columns = Object.keys(data[0]);
        const rows = data.map(item => columns.map(col => item[col]));

        autoTable(doc, {
            head: [columns],
            body: rows,
        });

        doc.save(`${fileName}.pdf`);
        promptModal('PDF', 'success')
    } catch (error) {
        promptModal('PDF', 'error')
        console.error('Error exporting PDF:', error);
    }
}

function exportAsExcel(data: any[], fileName: string) {
    try {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
        promptModal('EXCEL', 'success')
    } catch (error) {
        promptModal('EXCEL', 'error')
        console.error('Error exporting Excel:', error);
    }
}

const promptModal = (type: any, status: any) => {
    Swal.fire({
        title: `${status === 'success' ? 'Success' : 'Error'}`,
        text: `Listing ${type} was ${status === 'success' ? 'exported successfully' : 'not exported'}!`,
        icon: status,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Continue",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.value) {
        //   slides.value.splice(index, 1);
        } else {
        //   Swal.fire("Cancelled", "Action was cancelled", "info");
        }
      });
}

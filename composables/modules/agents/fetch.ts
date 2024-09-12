import { agents_api } from '@/api_factory/modules/agents'


const agentsList = ref({} as Record<string, any>) as any

export const useFetchAgents = () => {
    const loading = ref(false)

    const { $_fetch_agents } = agents_api

    const getAgents = async () => {
        loading.value = true
        const res = await $_fetch_agents() as any
        if (res.type !== 'ERROR') {
            console.log(res.data, 'heree')
            agentsList.value = res?.data?.result
        }
        loading.value = false
    }

    onMounted(() => {
        getAgents()
    })
    
    return { agentsList, loading, getAgents }
}

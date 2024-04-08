export const useBackground = defineStore('useBackground', {
    state: () => ({
        url: '',
        alt: '',
    }),
    actions: {
        set(params: BackgroundParams) {
            const keys = Object.keys(params)
            if (params.url) {
                this.url = params.url
            }
            if (params.alt) {
                this.alt = params.alt
            }
        }
    }
})

type BackgroundParams = {
    url?: string,
    alt?: string,
}
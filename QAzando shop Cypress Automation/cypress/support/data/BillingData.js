class BillingData {
    
    // Removida a palavra 'static'
    getValidData() {
        return {
            name: 'Vinicius',
            lastName: 'Pileggi',
            company: 'Vini Services',
            email: 'vini@gmail.com',
            countryIndex: 1,
            cityIndex: 1,
            zipCode: '03191000',
            address: 'Av. Paulista, 1000',
            notes: 'nada a informar'
        };
    }
}

// Exportamos uma nova instância, igual aos Page Objects!
export default new BillingData();
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			person: {},
			planet: {},
			vehicle: {},
			favorites: [],

			urlBase: "https://www.swapi.tech/api", // para usar la url cada vez que la preciso, llamando a esta variable
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err))
			},

			loadPlanet: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json()
					setStore({ planets: data.results })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},

			loadVehicle: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					const data = await response.json()
					setStore({ vehicles: data.results })
					return true
				} catch (error) {
					console.log(error)
					return false
				}

			},
			loadInfoPerson: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/" + id)
					const data = await response.json()
					console.log(data.result)
					setStore({ person: data.result })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},

			loadInfoPlanet: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/" + id)
					const data = await response.json()
					console.log(data.result)
					setStore({ planet: data.result })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},

			loadInfoVehicle: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/" + id)
					const data = await response.json()
					console.log(data.result)
					setStore({ vehicle: data.result })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},	

		}
	}
}



export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//characters [],
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
			//esta funcion va a traer los characters
			getCharacters: () => {
				fetch(`${getStore().urlBase}/people`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							characters: {...getStore().characters, data.result}
					})	
						console.log(item)

					})
			}
		}
	}

};

export default getState;

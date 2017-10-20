export class User {
	constructor(
		public _id: number =Math.floor(Math.random() * 100),
		public name: string = "",
		public username: string = "",
		public email: string = "",
		public password: string = ""
		){

	}
}

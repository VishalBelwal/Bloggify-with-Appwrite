import conf from "../config/config";
import { Client, Account, ID } from "appwrite"


export class AuthService{
  client = new Client();
  account;

  constructor(){
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appProjectId);
    this.account = new Account(this.client);
  }

  //destructuring the method
  async  createAccount({email, password, name}){
    try {
      const userAcc = await this.account.create(ID.unique(), email, password, name)
      if (userAcc) {
        //call another method(if it exist then get it login)
        return this.login({email, password});
      } else {
        return userAcc;
      }
    } catch (error) {
      return error;
    }
  }

  async login({email, password}){
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}

  async logout(){
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
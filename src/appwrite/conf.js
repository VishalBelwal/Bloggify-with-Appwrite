import conf from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service{
  client = new this.client();
  databases;
  bucket;

  constructor(){
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appProjectId);
      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.client)
  }

  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
      return await this.databases.createDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage, 
          status,
          userId
        }
      )
    } catch (error) {
      console.log("CreatePost :: Error", error);
    }
  }

  async updatePost( slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log("updatePost :: Error", error);
    }
  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug
      )

      return true;

    } catch (error) {
      console.log("deletePost :: Error", error);
      return false;
    }
  }

  async getPost(slug){
    try {
      await this.databases.getDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug
      )

      return true;

    } catch (error) {
      console.log("getPost :: Error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        conf.appDatabaseId,
        conf.appCollectionId,
        queries,
      )
    } catch (error) {
      console.log("getPosts :: Error", error);
      return false;
    }
  }

  //file upload service

  async uplaodFile(file){
    try {
      return await this.bucket.createFile(
        conf.appBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("uploadFile :: Error", error);
      return false;
    }
  }

  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appBucketId,
        fileId
      )

      return true;

    } catch (error) {
      console.log("deleteFile :: Error", error);
      return false;
    }
  }

  async getFilePreview(fileId){
    try {
      return this.bucket.getFilePreview(
        conf.appBucketId,
        fileId
      )

      return true;
      
    } catch (error) {
      console.log("getFilePreviews :: Error", error);
      return false;
    }
  }
}

const appWriteservice = new Service()
export default appWriteservice;
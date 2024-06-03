const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf;
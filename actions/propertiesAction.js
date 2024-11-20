import { databases } from '@/services/appwrite/client';
import {Query} from "appwrite"
export const getAllProperties = async (limit = 10, offset = 0) => {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID, 
        process.env.NEXT_PUBLIC_PROPERTIES,
        [
          Query.limit(limit),
          Query.offset(offset)
        ]
      );
  
      const totalResponse = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID, 
        process.env.NEXT_PUBLIC_PROPERTIES,
        [
          Query.limit(1),
          Query.offset(0)
        ]
      );
      const totalProperties = totalResponse.total;  
      const properties = response.documents.map(({ collectionId, databaseId, ...rest }) => rest);
      return { properties, totalProperties };
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  };

  export const getPropertyById = async (propertyId) => {
    try {
      const response = await databases.getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_PROPERTIES,
        propertyId
      );
      return response;
    } catch (error) {
      console.error('Error fetching property:', error);
      throw error;
    }
  };
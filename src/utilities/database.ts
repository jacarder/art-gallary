import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from "../models/database.types";

export const databaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)

export const getAllArt = async () => (await databaseClient.from('ArtPictures').select('*')).data;
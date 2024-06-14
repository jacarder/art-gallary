import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database, Tables } from '../models/database.types';
import { databaseClient, getAllArt } from './database';

interface DatabaseState {
	allArt: Tables<'ArtPictures'>[]
	fetchAllArt: () => Promise<void>
}

export const useDatabaseClientStore = create<DatabaseState>()(
	persist(
		(set, get) => ({
			allArt: [],
			fetchAllArt: async () => {
				set({ allArt: await getAllArt() ?? [] })
			}
		}),
		{
			name: 'bear-storage',
		},
	),
)
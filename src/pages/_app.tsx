import React, { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	useEffect(() => {
		const localStoragePersister = createSyncStoragePersister({
			storage: window.localStorage,
		});

		persistQueryClient({
			queryClient,
			persister: localStoragePersister,
		});
	});

	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}

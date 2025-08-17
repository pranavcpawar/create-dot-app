"use client";

import { ExtensionProvider } from "./extension-provider";
import { LightClientApiProvider } from "./light-client-provider";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ExtensionProvider>
			<LightClientApiProvider>{children}</LightClientApiProvider>
		</ExtensionProvider>
	);
}

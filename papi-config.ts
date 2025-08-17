"use client";

import { pas } from "@polkadot-api/descriptors";
import type { TypedApi } from "polkadot-api";
import { chainSpec as paseoChainSpec } from "polkadot-api/chains/paseo";

export interface ChainSpec {
	name: string;
	id: string;
	chainType: string;
	bootNodes: string[];
	telemetryEndpoints: string[];
	protocolId: string;
	properties: {
		tokenDecimals: number;
		tokenSymbol: string;
	};
	relay_chain: string;
	para_id: number;
	codeSubstitutes: Record<string, string>;
	genesis: {
		stateRootHash: string;
	};
}
export interface ChainConfig {
	key: string;
	name: string;
	color: string;
	descriptors: typeof pas;
	endpoints: string[];
	explorerUrl?: string;
	icon?: React.ReactNode;
	chainSpec: ChainSpec;
	relayChainSpec?: ChainSpec;
}

export type AvailableApis = TypedApi<typeof pas>;

export const chainConfig: ChainConfig[] = [
	{
		key: "paseo",
		name: "Paseo",
		descriptors: pas,
		color: "#38393F",
		endpoints: [
			"wss://rpc.ibp.network/paseo",
			"wss://pas-rpc.stakeworld.io",
			"wss://paseo.rpc.amforc.com",
		],
		chainSpec: JSON.parse(paseoChainSpec) as ChainSpec,
	},
];

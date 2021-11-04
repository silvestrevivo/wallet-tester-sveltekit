<script lang="ts">
	import {
		getLedgerWallet,
		getPhantomWallet,
		getSlopeWallet,
		getSolflareWallet,
		getSolletExtensionWallet,
		getSolletWallet,
		getTorusWallet
	} from '@solana/wallet-adapter-wallets';

	console.log('getPhantomWallet', getPhantomWallet);
</script>

<slot />

<svelte:head>
	<script>
		window.global = window;
	</script>
</svelte:head>

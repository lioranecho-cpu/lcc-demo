// LCC Demo — Mock API Interceptor
// Intercepts all fetch() calls to /api/ and returns realistic fake data
// No real node required — this is a read-only demo

const MOCK_NODE = {
  alias: "prodeskltn-demo",
  pubkey: "03ee97ebe8b3e50c6272c3b33c7d730ad6722016ecb2d5fbfe9b0b7595383307d1",
  version: "0.21.1-beta",
  synced_to_chain: true,
  block_height: 962046,
  num_active_channels: 12,
  num_peers: 12,
  uris: ["03ee97ebe8b3e50c6272c3b33c7d730ad6722016ecb2d5fbfe9b0b7595383307d1@demo.lcc.satslist.shop:9735"],
  color: "#F7931A"
};

const MOCK_WALLET = {
  on_chain: { total: 1842000, confirmed: 1842000, unconfirmed: 0 },
  channel: { local: 18420000, remote: 16580000 },
  total_sats: 20262000,
  confirmed_balance: 1842000,
  channel_balance: 18420000,
  btc_price: 64800,
  btc_price_usd: 64800,
  total_usd: "13129.78"
};

const MOCK_CHANNELS = {
  channels: [
    {
      channel_point: "aa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b:0",
      chan_id: "94887681",
      capacity: "5000000",
      local_balance: "1250000",
      remote_balance: "3748000",
      commit_fee: "893",
      active: true,
      remote_pubkey: "027100442c3b79f606f80f322d98d4b4",
      peer_alias: "block-iad-1",
      fee_per_kw: "253",
      local_chan_reserve_sat: "50000",
      remote_chan_reserve_sat: "50000",
      initiator: true,
      total_satoshis_sent: "12450000",
      total_satoshis_received: "3200000",
      num_updates: "1847"
    },
    {
      channel_point: "bb2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2:1",
      chan_id: "44390912",
      capacity: "5000000",
      local_balance: "2100000",
      remote_balance: "2898000",
      commit_fee: "892",
      active: true,
      remote_pubkey: "03864ef025fde8fb587d989186ce6a",
      peer_alias: "ACINQ",
      fee_per_kw: "253",
      local_chan_reserve_sat: "50000",
      remote_chan_reserve_sat: "50000",
      initiator: true,
      total_satoshis_sent: "8900000",
      total_satoshis_received: "4100000",
      num_updates: "2341"
    },
    {
      channel_point: "cc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3:0",
      chan_id: "36277761",
      capacity: "5055539",
      local_balance: "4980000",
      remote_balance: "74000",
      commit_fee: "563",
      active: true,
      remote_pubkey: "033e9ce4e8f0e68f7db49ffb6b9eec",
      peer_alias: "LNBiG [Hub-1]",
      fee_per_kw: "253",
      local_chan_reserve_sat: "50000",
      remote_chan_reserve_sat: "50000",
      initiator: false,
      total_satoshis_sent: "0",
      total_satoshis_received: "18200000",
      num_updates: "3102"
    },
    {
      channel_point: "dd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4:1",
      chan_id: "64498176",
      capacity: "5000000",
      local_balance: "1347942",
      remote_balance: "3650804",
      commit_fee: "893",
      active: true,
      remote_pubkey: "034ea80f8b148c750463546bd999bf",
      peer_alias: "LNBiG [Hub-1]",
      fee_per_kw: "253",
      local_chan_reserve_sat: "50000",
      remote_chan_reserve_sat: "50000",
      initiator: true,
      total_satoshis_sent: "14200000",
      total_satoshis_received: "2100000",
      num_updates: "2891"
    },
    {
      channel_point: "ee5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5:0",
      chan_id: "21295104",
      capacity: "3700000",
      local_balance: "320000",
      remote_balance: "3378000",
      commit_fee: "563",
      active: true,
      remote_pubkey: "039c1308939db5e583d1839ccc9f1a",
      peer_alias: "The Wrath Of The Wolves 😡🐺",
      fee_per_kw: "253",
      local_chan_reserve_sat: "37000",
      remote_chan_reserve_sat: "37000",
      initiator: false,
      total_satoshis_sent: "0",
      total_satoshis_received: "12400000",
      num_updates: "1204"
    },
    {
      channel_point: "ff6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6:1",
      chan_id: "46294272",
      capacity: "1000000",
      local_balance: "614903",
      remote_balance: "384094",
      commit_fee: "892",
      active: true,
      remote_pubkey: "030a118c885489ff9a751bd5c8b194",
      peer_alias: "Absolem",
      fee_per_kw: "253",
      local_chan_reserve_sat: "10000",
      remote_chan_reserve_sat: "10000",
      initiator: false,
      total_satoshis_sent: "2100000",
      total_satoshis_received: "3800000",
      num_updates: "892"
    },
    {
      channel_point: "aa7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7:0",
      chan_id: "08078336",
      capacity: "500000",
      local_balance: "312000",
      remote_balance: "187000",
      commit_fee: "563",
      active: true,
      remote_pubkey: "03e72fb9b743546a81df807f0b9f86",
      peer_alias: "DeplorableCarnivore",
      fee_per_kw: "253",
      local_chan_reserve_sat: "5000",
      remote_chan_reserve_sat: "5000",
      initiator: true,
      total_satoshis_sent: "1200000",
      total_satoshis_received: "890000",
      num_updates: "412"
    },
    {
      channel_point: "bb8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8:1",
      chan_id: "39460353",
      capacity: "500000",
      local_balance: "287000",
      remote_balance: "212000",
      commit_fee: "563",
      active: true,
      remote_pubkey: "031971c0f35db17685b1386f04f915",
      peer_alias: "FuzzNode",
      fee_per_kw: "253",
      local_chan_reserve_sat: "5000",
      remote_chan_reserve_sat: "5000",
      initiator: true,
      total_satoshis_sent: "980000",
      total_satoshis_received: "740000",
      num_updates: "287"
    },
    {
      channel_point: "cc9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9:0",
      chan_id: "29083393",
      capacity: "500000",
      local_balance: "341000",
      remote_balance: "158000",
      commit_fee: "563",
      active: true,
      remote_pubkey: "0290c9722262f78df35002923e202d",
      peer_alias: "LV-426 [Acheron]",
      fee_per_kw: "253",
      local_chan_reserve_sat: "5000",
      remote_chan_reserve_sat: "5000",
      initiator: true,
      total_satoshis_sent: "1100000",
      total_satoshis_received: "620000",
      num_updates: "341"
    },
    {
      channel_point: "dd0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0:1",
      chan_id: "12581888",
      capacity: "500000",
      local_balance: "421000",
      remote_balance: "78000",
      commit_fee: "563",
      active: true,
      remote_pubkey: "0242d24860bfc7f76b5b334ca4343b",
      peer_alias: "ghostpdh",
      fee_per_kw: "253",
      local_chan_reserve_sat: "5000",
      remote_chan_reserve_sat: "5000",
      initiator: true,
      total_satoshis_sent: "890000",
      total_satoshis_received: "210000",
      num_updates: "198"
    },
    {
      channel_point: "ee1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1:0",
      chan_id: "16165633",
      capacity: "250000",
      local_balance: "178000",
      remote_balance: "71000",
      commit_fee: "412",
      active: true,
      remote_pubkey: "024d711a5530d787d6ee253fde8cbb",
      peer_alias: "tradenetLND",
      fee_per_kw: "253",
      local_chan_reserve_sat: "2500",
      remote_chan_reserve_sat: "2500",
      initiator: true,
      total_satoshis_sent: "420000",
      total_satoshis_received: "180000",
      num_updates: "124"
    },
    {
      channel_point: "ff2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2:1",
      chan_id: "25211905",
      capacity: "250000",
      local_balance: "142000",
      remote_balance: "107000",
      commit_fee: "412",
      active: true,
      remote_pubkey: "02d05c4414a490627126659c5a7fb1",
      peer_alias: "TolasudolsaLND",
      fee_per_kw: "253",
      local_chan_reserve_sat: "2500",
      remote_chan_reserve_sat: "2500",
      initiator: true,
      total_satoshis_sent: "310000",
      total_satoshis_received: "140000",
      num_updates: "89"
    }
  ]
};

const MOCK_ROUTING = {
  fees_30d_sats: 2847,
  fees_60d_sats: 4120,
  fees_alltime_sats: 4120,
  volume_30d_btc: 0.42180000,
  forwarding_events: [
    { timestamp: Math.floor(Date.now()/1000) - 3600, amt_in: "92306", amt_out: "92260", fee: "46", chan_id_in: "21295104", chan_id_out: "64498176", peer_alias_in: "The Wrath Of The Wolves 😡🐺", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 3720, amt_in: "73829", amt_out: "73793", fee: "36", chan_id_in: "39460353", chan_id_out: "64498176", peer_alias_in: "FuzzNode", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 3840, amt_in: "78028", amt_out: "77989", fee: "39", chan_id_in: "39460353", chan_id_out: "64498176", peer_alias_in: "FuzzNode", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 4200, amt_in: "153995", amt_out: "153918", fee: "77", chan_id_in: "08078336", chan_id_out: "64498176", peer_alias_in: "DeplorableCarnivore", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 4560, amt_in: "119620", amt_out: "119561", fee: "59", chan_id_in: "08078336", chan_id_out: "64498176", peer_alias_in: "DeplorableCarnivore", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 7200, amt_in: "104191", amt_out: "104139", fee: "52", chan_id_in: "46294272", chan_id_out: "08078336", peer_alias_in: "Absolem", peer_alias_out: "DeplorableCarnivore" },
    { timestamp: Math.floor(Date.now()/1000) - 7320, amt_in: "164593", amt_out: "164511", fee: "82", chan_id_in: "46294272", chan_id_out: "39460353", peer_alias_in: "Absolem", peer_alias_out: "FuzzNode" },
    { timestamp: Math.floor(Date.now()/1000) - 7680, amt_in: "86108", amt_out: "86065", fee: "43", chan_id_in: "46294272", chan_id_out: "08078336", peer_alias_in: "Absolem", peer_alias_out: "DeplorableCarnivore" },
    { timestamp: Math.floor(Date.now()/1000) - 86400, amt_in: "536395", amt_out: "536127", fee: "268", chan_id_in: "21295104", chan_id_out: "64498176", peer_alias_in: "The Wrath Of The Wolves 😡🐺", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 90000, amt_in: "329496", amt_out: "329331", fee: "165", chan_id_in: "21295104", chan_id_out: "64498176", peer_alias_in: "The Wrath Of The Wolves 😡🐺", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 172800, amt_in: "1072790", amt_out: "1072254", fee: "536", chan_id_in: "21295104", chan_id_out: "64498176", peer_alias_in: "The Wrath Of The Wolves 😡🐺", peer_alias_out: "LNBiG [Hub-1]" },
    { timestamp: Math.floor(Date.now()/1000) - 259200, amt_in: "200000", amt_out: "199900", fee: "100", chan_id_in: "44390912", chan_id_out: "94887681", peer_alias_in: "ACINQ", peer_alias_out: "block-iad-1" }
  ],
  daily_fees: [8, 12, 5, 24, 18, 42, 89, 124, 201, 187, 312, 284, 542, 827],
  daily_volume: [0.008, 0.012, 0.005, 0.024, 0.018, 0.042, 0.089, 0.124, 0.201, 0.187, 0.312, 0.284, 0.542, 0.827]
};

const MOCK_MEMPOOL = {
  fastestFee: 2,
  halfHourFee: 1,
  hourFee: 1,
  economyFee: 1,
  minimumFee: 1,
  block_height: 962046
};

const MOCK_MINING = {
  miners: [
    { name: "BitAxe Gamma", hashrate: "1.4 TH/s", power: "22W", ip: "192.168.4.21", temp: "62°C", status: "mining" },
    { name: "Avalon Nano3", hashrate: "2.9 TH/s", power: "89W", ip: "192.168.4.23", temp: "71°C", status: "mining" },
    { name: "NerdQAxe++ Rev 6.1", hashrate: "6.1 TH/s", power: "115W", ip: "192.168.4.20", temp: "68°C", status: "mining" }
  ],
  total_hashrate: "10.4 TH/s",
  pool: "public-pool.io",
  blocks_found: 0,
  uptime: "99.2%"
};

const MOCK_TRANSACTIONS = {
  transactions: [
    { timestamp: Math.floor(Date.now()/1000) - 3600, amount: 542, type: "routing", label: "Routing fees", status: "settled" },
    { timestamp: Math.floor(Date.now()/1000) - 7200, amount: -166, type: "on_chain", label: "Channel open — tradenetLND", status: "confirmed" },
    { timestamp: Math.floor(Date.now()/1000) - 86400, amount: 827, type: "routing", label: "Routing fees", status: "settled" },
    { timestamp: Math.floor(Date.now()/1000) - 172800, amount: -18142, type: "rebalance", label: "🔀 Channel rebalance (circular)", status: "settled" },
    { timestamp: Math.floor(Date.now()/1000) - 259200, amount: 15000, type: "receive", label: "LNBiG inbound purchase refund", status: "settled" },
    { timestamp: Math.floor(Date.now()/1000) - 345600, amount: -330, type: "on_chain", label: "Channel open — TolasudolsaLND", status: "confirmed" },
    { timestamp: Math.floor(Date.now()/1000) - 432000, amount: 1200, type: "routing", label: "Routing fees", status: "settled" },
    { timestamp: Math.floor(Date.now()/1000) - 518400, amount: -5000, type: "rebalance", label: "🔀 Channel rebalance (circular)", status: "settled" }
  ]
};

const MOCK_PNL = {
  "30d": { period: "30d", routing_fees: 2847, rebalance_fees: 18142, open_fees: 8234, close_fees: 0, total_costs: 26376, net_pnl: -23529 },
  "1y":  { period: "1y",  routing_fees: 4120, rebalance_fees: 24000, open_fees: 12000, close_fees: 8500, total_costs: 44500, net_pnl: -40380 },
  "all": { period: "all", routing_fees: 4120, rebalance_fees: 24000, open_fees: 12000, close_fees: 8500, total_costs: 44500, net_pnl: -40380 }
};

const MOCK_PEERS = {
  peers: [
    { pub_key: "027100442c3b79f606f80f322d98d4b4", alias: "block-iad-1", sat_sent: "12450000", sat_recv: "3200000", ping_time: "42", sync_type: "ACTIVE_SYNC" },
    { pub_key: "03864ef025fde8fb587d989186ce6a", alias: "ACINQ", sat_sent: "8900000", sat_recv: "4100000", ping_time: "38", sync_type: "ACTIVE_SYNC" },
    { pub_key: "033e9ce4e8f0e68f7db49ffb6b9eec", alias: "LNBiG [Hub-1]", sat_sent: "0", sat_recv: "18200000", ping_time: "28", sync_type: "ACTIVE_SYNC" },
    { pub_key: "039c1308939db5e583d1839ccc9f1a", alias: "The Wrath Of The Wolves 😡🐺", sat_sent: "0", sat_recv: "12400000", ping_time: "124", sync_type: "ACTIVE_SYNC" },
    { pub_key: "030a118c885489ff9a751bd5c8b194", alias: "Absolem", sat_sent: "2100000", sat_recv: "3800000", ping_time: "31", sync_type: "ACTIVE_SYNC" }
  ]
};

const MOCK_JOURNAL = {
  entries: [
    { id: 1, title: "Node goes live!", body: "First block synced. LCC running. The journey begins. Stack sats, route payments, stay sovereign.", tag: "milestone", block: 958000, date: new Date(Date.now() - 30*86400*1000).toISOString() },
    { id: 2, title: "First routing fee", body: "1 sat earned at block 958,558. Not much but it's honest work. The network is starting to discover my channels.", tag: "win", block: 958558, date: new Date(Date.now() - 25*86400*1000).toISOString() },
    { id: 3, title: "Wolfie opened 3.7M inbound", body: "The Wrath Of The Wolves opened a free 3.7M sat inbound channel. Incredible peer. Already routing heavy volume through it.", tag: "win", block: 961500, date: new Date(Date.now() - 5*86400*1000).toISOString() },
    { id: 4, title: "BIP-110 survival", body: "Closed all 21 channels cooperatively before block 961,632. Reopened lean — 12 quality channels. Better than before.", tag: "milestone", block: 961632, date: new Date(Date.now() - 4*86400*1000).toISOString() },
    { id: 5, title: "LCC submitted to Umbrel App Store", body: "PR #5974 submitted to getumbrel/umbrel-apps. All lint checks passed. Multi-arch Docker image live. From BIP-110 panic to Umbrel submission in one weekend.", tag: "milestone", block: 962038, date: new Date(Date.now() - 2*86400*1000).toISOString() },
    { id: 6, title: "827 sats in 24h", body: "Absolem joined yesterday and immediately started routing. 827 sats earned in 24 hours — best day yet. The lean rebuild is working.", tag: "win", block: 962046, date: new Date(Date.now() - 86400*1000).toISOString() }
  ]
};

const MOCK_FEEPOLICY = {
  channels: MOCK_CHANNELS.channels.map(ch => ({
    chan_id: ch.chan_id,
    peer_alias: ch.peer_alias,
    base_fee_msat: "0",
    fee_rate_ppm: ch.peer_alias.includes("LNBiG") ? "150" :
                  ch.peer_alias.includes("block-iad") ? "50" :
                  ch.peer_alias.includes("ACINQ") ? "150" : "100"
  }))
};

const MOCK_STRATEGIES = {};

// ─── Intercept fetch ───────────────────────────────────────────────────────
const _originalFetch = window.fetch.bind(window);

window.fetch = async function(url, options = {}) {
  const u = typeof url === 'string' ? url : url.toString();
  let path = u.replace(/https?:\/\/[^/]+/, '').replace('/static', '').split('?')[0];
  if (!path.startsWith('/')) path = '/' + path;
  const params = new URLSearchParams(u.includes('?') ? u.split('?')[1] : '');

  // Auth — always succeed in demo
  if (path === '/api/auth/verify-password' || path.includes('verify-password')) {
    return jsonResponse({ success: true, token: 'demo-token-lcc-2026' });
  }

  if (path === '/api/nostr/verify-nsec') {
    return jsonResponse({ success: true });
  }

  if (path === '/api/tier') {
    return jsonResponse({ tier: 'pro' });
  }

  if (path === '/api/dashboard') return jsonResponse({
    node: MOCK_NODE,
    wallet: MOCK_WALLET,
    routing: MOCK_ROUTING,
    mempool: MOCK_MEMPOOL,
    channels: {
      total_capacity: 22305539,
      num_active: 12,
      list: MOCK_CHANNELS.channels.map(ch => ({
        peer_alias: ch.peer_alias,
        capacity: parseInt(ch.capacity),
        local_balance: parseInt(ch.local_balance),
        remote_balance: parseInt(ch.remote_balance),
        fee_ppm: ch.peer_alias.includes('LNBiG') ? 150 : ch.peer_alias.includes('block') ? 50 : 100,
        status: 'active'
      }))
    },
    fees_30d_sats: 2847,
    fees_alltime_sats: 4120
  });
  if (path === '/api/node') return jsonResponse(MOCK_NODE);
  if (path === '/api/wallet') return jsonResponse(MOCK_WALLET);
  if (path === '/api/channels') return jsonResponse(MOCK_CHANNELS);
  if (path === '/api/peers') return jsonResponse(MOCK_PEERS);
  if (path === '/api/mempool') return jsonResponse(MOCK_MEMPOOL);
  if (path === '/api/mining') return jsonResponse(MOCK_MINING);
  if (path === '/api/feepolicy') return jsonResponse(MOCK_FEEPOLICY);
  if (path === '/api/channel-strategies') return jsonResponse(MOCK_STRATEGIES);

  if (path === '/api/routing') {
    return jsonResponse(MOCK_ROUTING);
  }

  if (path === '/api/transactions') {
    return jsonResponse(MOCK_TRANSACTIONS);
  }

  if (path === '/api/pnl') {
    const period = params.get('period') || '30d';
    return jsonResponse(MOCK_PNL[period] || MOCK_PNL['30d']);
  }

  if (path === '/api/journal') {
    if (options.method === 'POST') {
      return jsonResponse({ success: true, message: "Demo mode — journal entries are not saved." });
    }
    return jsonResponse(MOCK_JOURNAL);
  }

  // Write operations — show demo notice
  if (['POST','PUT','DELETE'].includes((options.method||'GET').toUpperCase())) {
    if (path.includes('openchannel') || path.includes('closechannel') ||
        path.includes('sendpayment') || path.includes('updatefees') ||
        path.includes('rebalance')) {
      return jsonResponse({
        success: false,
        error: "🎮 Demo mode — write operations are disabled. Install LCC on your own node to use this feature.",
        demo: true
      }, 200);
    }
  }

  // Settings
  if (path === '/api/settings/lnbits') return jsonResponse({ lnbits_url: '', invoice_key: '' });
  if (path === '/api/settings/rebalance') return jsonResponse({ success: true });
  if (path === '/api/estimatefee') return jsonResponse({ sat_per_vb: 1 });
  if (path.startsWith('/api/chaninfo')) return jsonResponse({ node1_pub: '', node2_pub: '' });

  // Fallback — try real fetch (for static assets)
  return _originalFetch(url, options);
};

function jsonResponse(data, status = 200) {
  return Promise.resolve(new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  }));
}

// Auto-login for demo — skip login page
if (window.location.pathname.includes('login')) {
  window.location.href = 'index.html';
}

// Set demo tier
localStorage.setItem('lcc_tier', 'pro');
localStorage.setItem('lcc_demo_mode', 'true');

console.log('🎮 LCC Demo Mode active — all data is simulated');

// Clear any real LCC session to prevent redirect to live node
localStorage.removeItem('lcc_session');
localStorage.removeItem('lcc_token');
sessionStorage.clear();

// Set demo session immediately so session checks pass
const demoSession = JSON.stringify({ expires: Date.now() + 86400000, demo: true });
localStorage.setItem('lcc_session', demoSession);
localStorage.setItem('lcc_tier', 'pro');

// Add demo banner to page
window.addEventListener('DOMContentLoaded', () => {
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#F7931A;color:#000;padding:8px 20px;border-radius:20px;font-size:12px;font-weight:700;z-index:99999;pointer-events:none;';
  banner.textContent = '🎮 DEMO MODE — Read only. Install LCC on your node to unlock all features.';
  document.body.appendChild(banner);
});

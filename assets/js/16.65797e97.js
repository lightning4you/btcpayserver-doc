(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{443:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Receive_1.9b34f175.png"},444:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Receive_2.46633674.png"},445:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Receive_3.9eede34c.png"},446:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Pay_1.b4dc6b43.png"},447:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Pay_2.8a0a51a4.png"},448:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Pay_3.6dc7c8c0.png"},449:function(e,a,t){e.exports=t.p+"assets/img/Payjoin_Guide_Pay_4.5608332a.png"},592:function(e,a,t){"use strict";t.r(a);var i=t(26),o=Object(i.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"btcpay-server-payjoin-guide"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-payjoin-guide"}},[e._v("#")]),e._v(" BTCPay Server Payjoin Guide")]),e._v(" "),i("p",[e._v("This document explains how to use BTCPay Server's Payjoin feature. For a detailed, technical explanation of how payjoin is implemented, check "),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP78"),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"enabling-payjoin-as-a-merchant"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enabling-payjoin-as-a-merchant"}},[e._v("#")]),e._v(" Enabling Payjoin as a merchant")]),e._v(" "),i("ol",[i("li",[e._v("Create a store")]),e._v(" "),i("li",[e._v("Configure a "),i("RouterLink",{attrs:{to:"/HotWallet/"}},[e._v("hot wallet")]),e._v(" for your derivation scheme (Store => Derivation Scheme => BTC => Modify => Import from => a new/existing seed => Is hot wallet checked and using either segwit or segwit wrapped as an address type => Generate. Don't forget to click Confirm!)")],1),e._v(" "),i("li",[e._v('Enable Payjoin/P2EP in the "General Settings" and click "Save"')])]),e._v(" "),i("p",[e._v("It's important to note that you will need at least 1 UTXO for payjoin to work.")]),e._v(" "),i("figure",[i("img",{attrs:{src:t(443),alt:""}})]),e._v(" "),i("figure",[i("img",{attrs:{src:t(444),alt:""}})]),e._v(" "),i("figure",[i("img",{attrs:{src:t(445),alt:""}})]),e._v(" "),i("h2",{attrs:{id:"paying-to-payjoin-as-a-user"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#paying-to-payjoin-as-a-user"}},[e._v("#")]),e._v(" Paying to Payjoin as a user")]),e._v(" "),i("p",[e._v("The "),i("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("BTCPay Wallet")]),e._v(" supports Payjoin.")],1),e._v(" "),i("ol",[i("li",[e._v("Retrieve the BIP21 payment link from a BTCPay Server invoice which has payjoin enabled by either:\n"),i("ul",[i("li",[e._v("Scan the QR code with the camera scanning feature")]),e._v(" "),i("li",[e._v('Copy the link from the "Open in wallet" button and paste it in the "Parse BIP21" prompt')])])]),e._v(" "),i("li",[e._v('The send form should be populated with the payment details. You can check if the invoice supports payjoin by expanding the "advanced settings" and see if there is a "Payjoin endoint" input with a url.')]),e._v(" "),i("li",[e._v("Sign your transaction using either BTCPay Server's hardware wallet support via "),i("RouterLink",{attrs:{to:"/Vault/"}},[e._v("BTCPay Vault")]),e._v(" or the "),i("RouterLink",{attrs:{to:"/HotWallet/"}},[e._v("hot wallet")]),e._v(" feature.")],1),e._v(" "),i("li",[e._v("Once your original transaction is ready, you will be given the option to either "),i("code",[e._v("Broadcast (Payjoin)")]),e._v(" or to "),i("code",[e._v("Broadcast (Simple)")]),e._v(". Choose "),i("code",[e._v("Broadcast (Payjoin)")]),e._v(".")]),e._v(" "),i("li",[e._v("The payjoin server will propose a new special transaction, if possible. If the payjoin server is unable to do the payjoin, the original transaction is broadcast instead.")]),e._v(" "),i("li",[e._v("If you are using a hardware wallet, you will be asked to sign the payjoin transaction again (the hot wallet feature signs the transaction for you automatically).")]),e._v(" "),i("li",[e._v("Congratulations, you've just helped improve Bitcoin's fungibility and your financial sovereignity!")])]),e._v(" "),i("figure",[i("img",{attrs:{src:t(446),alt:""}})]),e._v(" "),i("figure",[i("img",{attrs:{src:t(447),alt:""}})]),e._v(" "),i("figure",[i("img",{attrs:{src:t(448),alt:""}})]),e._v(" "),i("figure",[i("img",{attrs:{src:t(449),alt:""}})]),e._v(" "),i("h2",{attrs:{id:"why-did-a-payjoin-not-happen"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#why-did-a-payjoin-not-happen"}},[e._v("#")]),e._v(" Why did a payjoin not happen?")]),e._v(" "),i("p",[e._v("There's multiple reasons for this:")]),e._v(" "),i("ul",[i("li",[e._v("The store did not have any utxos to contribute towards a payjoin")]),e._v(" "),i("li",[e._v("Your wallet does not use the same format as the store's (essential to not raise suspicion to analysis companies)")]),e._v(" "),i("li",[e._v("You are not using segwit or p2sh wrapped segwit.")]),e._v(" "),i("li",[e._v("The payjoin server is not available")])]),e._v(" "),i("h2",{attrs:{id:"supported-wallets"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-wallets"}},[e._v("#")]),e._v(" Supported wallets")]),e._v(" "),i("p",[e._v("Please contact and encourage your wallet developers to add support. The more widespread the usage of payjoin, the more broken the heuristics used by blockchain analysis companies become and can effectively trace your financial history. If you are a wallet developer, please "),i("RouterLink",{attrs:{to:"/Community/"}},[e._v("contact us")]),e._v(" if you need help or have feedback.")],1)])}),[],!1,null,null,null);a.default=o.exports}}]);
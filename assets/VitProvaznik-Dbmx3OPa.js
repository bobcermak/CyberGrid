import{a as e,i as t,n,o as r,r as i,t as a}from"./InvestmentChart-Bteh8g9K.js";import{A as o,D as s,S as c,T as l,a as u,b as d,c as f,d as p,f as m,h,i as g,l as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,x as E,y as D}from"./index-BVOjS-zz.js";var O=T(),k=180,A=[{name:`Po`,value:2.1},{name:`Út`,value:3.4},{name:`St`,value:2.8},{name:`Čt`,value:4.6},{name:`Pá`,value:3.9},{name:`So`,value:5.2},{name:`Ne`,value:4.4}],j=({children:t,loading:n=!1})=>n?(0,O.jsx)(h,{height:k,radius:`md`}):(0,O.jsx)(S,{style:{width:`100%`,height:k},children:(0,O.jsx)(r,{children:(0,O.jsx)(e,{data:A,margin:{top:16,right:16,left:16,bottom:8},children:t})})}),M={menuItem:`
import { MenuItem } from 'remiho-klubik-cyber-components';

<MenuItem icon={<House />}>Domů</MenuItem>
<MenuItem icon={<House />} isActive>Domů</MenuItem>
<MenuItem icon={<House />} disabled>Domů</MenuItem>
`,sidebar:`
import { Sidebar } from 'remiho-klubik-cyber-components';

const items = [
  { id: 'domu', label: 'Domů', icon: <House size={18} /> },
  { id: 'nastaveni', label: 'Nastavení', icon: <Gear size={18} /> },
];

<Sidebar
  items={items}
  activeId={active}
  onSelect={setActive}
  brand={{ logo: <Logo />, label: 'DASHBOARD', href: '/' }}  {/* logo i text přes props */}
/>
`,chart:`
import { InvestmentChart } from 'remiho-klubik-cyber-components';

<InvestmentChart />
`,chartLine:`
import { AreaChart } from 'recharts';
import { ChartLine } from 'remiho-klubik-cyber-components';

<AreaChart data={data}>
  <ChartLine dataKey="value" />
</AreaChart>
`,chartAxis:`
import { AreaChart } from 'recharts';
import { ChartAxis, ChartLine } from 'remiho-klubik-cyber-components';

<AreaChart data={data}>
  <ChartAxis dataKey="name" />
  <ChartLine dataKey="value" />
</AreaChart>
`,chartMarker:`
import { ChartMarker } from 'remiho-klubik-cyber-components';

<svg width="160" height="48">
  <ChartMarker cx={80} cy={24} />
</svg>
`},N=o(s(),1),P=[{id:`domu`,label:`Domů`,icon:(0,O.jsx)(d,{size:18})},{id:`nastaveni`,label:`Nastavení`,icon:(0,O.jsx)(E,{size:18})},{id:`vysledky`,label:`Výsledky`,icon:(0,O.jsx)(c,{size:18})},{id:`konfigurace`,label:`Konfigurace`,icon:(0,O.jsx)(D,{size:18})}],F=({loading:e=!1})=>{let[t,n]=(0,N.useState)(`vysledky`);return(0,O.jsx)(m,{items:P,activeId:t,onSelect:n,loading:e,brand:{logo:(0,O.jsx)(p,{size:`1.2em`}),label:`DASHBOARD`,href:w(`vit-provaznik`)},"aria-label":e?`Ukázková navigace – načítání`:`Ukázková navigace`,style:{position:`static`,height:400}})},I=f(`vit-provaznik`),L={name:`loading`,type:`boolean`,default:`false`,description:`Skeleton místo obsahu, stejný rozměr.`},R=()=>{let e=y(),r=l();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x,{member:I,description:`Navigace dashboardu a graf ceny elektřiny.`}),(0,O.jsx)(u,{id:`sidebar`,name:`Sidebar`,level:`molecule`,description:`Sbalitelné boční menu z položek MenuItem - pohání i navigaci téhle dokumentace.`,preview:(0,O.jsxs)(_,{$align:`flex-start`,$gap:`32px`,children:[(0,O.jsx)(F,{loading:e}),(0,O.jsxs)(v,{style:{paddingTop:0,borderTop:0},children:[(0,O.jsx)(C,{children:`loading`}),(0,O.jsx)(F,{loading:!0})]})]}),code:M.sidebar,props:[L,{name:`items`,type:`SidebarItem[]`,description:`{ id, label, icon?, disabled? }`},{name:`brand`,type:`{ logo?, label?, href? }`,description:`Logo a název nahoře – obojí přes props, s href je to odkaz.`},{name:`activeId / onSelect`,type:`string / (id) => void`,description:`Aktivní položka.`},{name:`defaultCollapsed`,type:`boolean`,default:`false`,description:`Sbalené menu.`}]}),(0,O.jsx)(u,{id:`menu-item`,name:`MenuItem`,level:`atom`,description:`Položka menu - výchozí, aktivní a disabled stav.`,column:!0,preview:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(_,{children:[(0,O.jsx)(b,{loading:e,icon:(0,O.jsx)(d,{size:18}),style:{width:`auto`},children:`Domů`}),(0,O.jsx)(b,{loading:e,icon:(0,O.jsx)(d,{size:18}),isActive:!0,style:{width:`auto`},children:`Domů`}),(0,O.jsx)(b,{loading:e,icon:(0,O.jsx)(d,{size:18}),disabled:!0,style:{width:`auto`},children:`Domů`})]}),(0,O.jsxs)(v,{children:[(0,O.jsx)(C,{children:`loading`}),(0,O.jsx)(_,{children:(0,O.jsx)(`div`,{style:{width:160},children:(0,O.jsx)(b,{icon:(0,O.jsx)(d,{size:18}),loading:!0,children:`Domů`})})})]})]}),code:M.menuItem,props:[L,{name:`icon`,type:`ReactNode`,description:`Ikona.`},{name:`isActive`,type:`boolean`,default:`false`,description:`Aktivní položka.`},{name:`collapsed`,type:`boolean`,default:`false`,description:`Jen ikona.`}]}),(0,O.jsx)(u,{id:`investment-chart`,name:`InvestmentChart`,level:`molecule`,description:`Plošný graf s přepínačem období a vlastním tooltipem.`,column:!0,preview:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a,{loading:e}),(0,O.jsxs)(v,{children:[(0,O.jsx)(C,{children:`loading`}),(0,O.jsx)(a,{loading:!0})]})]}),code:M.chart,props:[L]}),(0,O.jsx)(u,{id:`chart-line`,name:`ChartLine`,level:`atom`,description:`Křivka grafu s gradientovou výplní pod čarou. Při najetí ukáže ChartMarker.`,column:!0,preview:(0,O.jsx)(j,{loading:e,children:(0,O.jsx)(i,{})}),code:M.chartLine,props:[{name:`dataKey`,type:`string`,default:`'value'`,description:`Klíč hodnoty v datech grafu.`},{name:`color`,type:`string`,default:`colorYellow`,description:`Barva čáry, výplně i markeru.`}]}),(0,O.jsx)(u,{id:`chart-axis`,name:`ChartAxis`,level:`atom`,description:`Vodorovná osa s popisky a jemnou mřížkou.`,column:!0,preview:(0,O.jsx)(j,{loading:e,children:(0,O.jsx)(n,{})}),code:M.chartAxis,props:[{name:`dataKey`,type:`string`,default:`'name'`,description:`Klíč popisků v datech grafu.`},{name:`grid`,type:`boolean`,default:`true`,description:`Vodorovné linky mřížky.`}]}),(0,O.jsx)(u,{id:`chart-marker`,name:`ChartMarker`,level:`atom`,description:`Bod aktuální hodnoty se září – ChartLine ho použije jako aktivní bod.`,preview:e?(0,O.jsx)(h,{width:160,height:48,radius:`md`}):(0,O.jsxs)(`svg`,{width:`160`,height:`48`,viewBox:`0 0 160 48`,role:`img`,"aria-label":`Ukázka ChartMarker`,children:[(0,O.jsx)(t,{cx:24,cy:24,r:4}),(0,O.jsx)(t,{cx:80,cy:24}),(0,O.jsx)(t,{cx:136,cy:24,r:6,color:r.colors.colorCyan})]}),code:M.chartMarker,props:[{name:`cx / cy`,type:`number`,description:`Pozice středu (recharts je doplní sám).`},{name:`r`,type:`number`,default:`6`,description:`Poloměr bodu, záře má dvojnásobek.`},{name:`color`,type:`string`,default:`colorYellow`,description:`Barva bodu i záře.`}]}),(0,O.jsx)(g,{components:I.components,loading:e})]})};export{R as VitProvaznikPage};
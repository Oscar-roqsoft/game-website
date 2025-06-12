<template>
    <section class="bg-gray-900 text-white py-16">
      <div class="max-w-[900px] mx-auto px-6 text-center">
        <h2 class="text-4xl tracking-wide font-bold mb-12">How It Works</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
            <div class="mb-4 w-12 h-12" v-html="step.icon"></div>
            <p class="text-lg font-semibold">{{ step.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  
  const steps = [
    {
      title: "Create your free account",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#22c55f" d="M17 21.025q-.2 0-.4-.05t-.375-.175l-3-1.75q-.35-.2-.537-.537t-.188-.738V14.25q0-.4.188-.737t.537-.538l3-1.75q.175-.125.375-.175T17 11t.388.063t.362.162l3 1.75q.35.2.55.538t.2.737v3.525q0 .4-.2.738t-.55.537l-3 1.75q-.175.1-.363.163t-.387.062M4 20q-.825 0-1.412-.587T2 18v-.8q0-.825.425-1.55t1.175-1.1q1.4-.7 2.925-1.113t3.1-.462q.2 0 .35.088t.25.237t.125.338t-.025.387q-.15.5-.225 1.013t-.075 1.012q0 .75.163 1.488t.487 1.437q.075.2.075.375t-.1.325t-.238.238t-.337.087zm6-8q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m4.65 1.85L17 15.225l2.35-1.375L17 12.5zm3.1 5.2l2.25-1.3V15l-2.25 1.325zM14 17.75l2.25 1.325V16.35L14 15.025z"/></svg>`
    },
    {
      title: "Choose your favorite game",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#22c55f" viewBox="0 0 24 24">
  <path d="M6 8C4.34 8 3 9.34 3 11v2c0 1.66 1.34 3 3 3 .83 0 1.58-.34 2.12-.88L9 14h6l.88 1.12C16.42 15.66 17.17 16 18 16c1.66 0 3-1.34 3-3v-2c0-1.66-1.34-3-3-3H6zm1.5 2h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1zm8.5 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
</svg>

`
    },
    {
      title: "Join upcoming match or tournament",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-current text-[#22c55f]" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>`
    },
    {
      title: "Play the game, report results and climb the leaderboard",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#22c55f" viewBox="0 0 24 24">
  <path d="M17 3H7v2H4v2c0 2.97 2.16 5.43 5 5.91V15H8v2h8v-2h-3v-2.09c2.84-.48 5-2.94 5-5.91V5h-3V3zm0 4c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8v2z"/>
</svg>
`
    }
  ]
  </script>
  
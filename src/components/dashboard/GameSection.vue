<template>
    <section class="bg-gray-900 p-6 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-4">
        {{ game.icon }} {{ game.name }}
      </h2>
  
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Tournaments -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Tournaments</h3>
          <!-- <TournamentCard
            v-for="(t, i) in game.tournaments"
            :key="i"
            :tournament="t"
          /> -->
          <p v-if="!game.tournaments.length" class="text-sm text-gray-500">No tournaments</p>
        </div>
  
        <!-- Fixtures -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Upcoming Fixtures</h3>
          <FixtureCard
            v-for="(f, i) in game.fixtures"
            :key="i"
            :fixture="f"
          />
          <p v-if="!game.fixtures.length" class="text-sm text-gray-500">No upcoming fixtures</p>
        </div>
  
        <!-- Scores -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Live Scores</h3>
          <!-- <ScoreCard
            v-for="(s, i) in game.scores"
            :key="i"
            :score="s"
          /> -->
          <p v-if="!game.scores.length" class="text-sm text-gray-500">No live scores</p>
        </div>
  
        <!-- Leaderboard -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Leaderboard</h3>
          <!-- <LeaderboardCard
            v-for="(p, i) in game.leaderboard"
            :key="i"
            :player="p"
          /> -->
          <p v-if="!game.leaderboard.length" class="text-sm text-gray-500">No leaderboard yet</p>
        </div>
      </div>
    </section>
</template>
  
<script setup>
  defineProps({
    game: Object
  })
</script>
  
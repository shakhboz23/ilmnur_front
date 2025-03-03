<template>
    <main class="settings_tabs">
        <PageGroupSettingsPayouts v-if="$route.query.tab == 'payouts'" />
        <PageGroupSettingsCourses v-if="$route.query.tab == 'courses'" />
        <PageGroupSettingsInvite v-if="$route.query.tab == 'invite'" />
        <PageGroupSettingsGeneral v-if="$route.query.tab == 'general'" />
        <PageGroupSettingsSubscriptions v-if="$route.query.tab == 'subscriptions'" />
    </main>
</template>
<script setup>
import { group_settings_sidebar } from '~/constants';

const router = useRouter();

function goToPage(url) {
    console.log(url)
    // router.push({
    //     query: {
    //         tab: 'page'
    //     }
    // })
    router.push(`?category=dsds`)
}
</script>
<style lang="scss">
.settings_tabs {
    h1 {
        font-size: 20px;
        font-weight: 600;
    }

    h2 {
        font-weight: 600;
    }
}
</style>
<template>
    <div>
        <ul>
            <li v-for="i in 10" class="flex justify-between max-h-fit p-2 hover:bg-[#E2E2E2] r_8">
                <ul class="space-y-2 w-full max-w-[60%]">
                    <li class="text-lg font-semibold truncate">Machine Learning Learning Learning LearningLearning Learning Learning Learning LearningLearning Learning</li>
                    <li class="flex gap-1">
                        <span>4.5</span>
                        <img src="@/assets/svg/icon/a_star.svg" alt="">
                    </li>
                    <li>10.5k Learners</li>
                </ul>
                <div class="full_flex max-w-[40%] r_8">
                    <img class="max-h-[140px] aspect-auto r_8"
                        src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
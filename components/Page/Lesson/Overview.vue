<template>
    <div class="space-y-4">
        <nav class="r_8 bg_main p-4">
            <ul class="text-sm text-white space-y-3">
                <li class="flex items-center gap-3">
                    <img loading="lazy"  src="@/assets/svg/lesson/lesson.svg" alt="">
                    <span>{{lesson_course?.lesson_count}} ta dars</span>
                </li>
                <li class="flex items-center gap-3">
                    <img loading="lazy"  src="@/assets/svg/lesson/lectures.svg" alt="">
                    <span>{{lesson_course?.lecture_count}} ta ma'ruza</span>
                </li>
                <li class="flex items-center gap-3">
                    <img loading="lazy"  src="@/assets/svg/lesson/total.svg" alt="">
                    <span>{{lesson_course?.total_duration}}s umumiy davomiylik</span>
                </li>
                <li class="flex items-center gap-3">
                    <img loading="lazy"  src="@/assets/svg/lesson/lang.svg" alt="">
                    <span>Ingliz tili</span>
                </li>
            </ul>
        </nav>
        <section>
            <p v-html="lesson_course?.description"></p>
        </section>
    </div>
</template>

<script setup>
defineProps({
    lesson_course: Object,
})

</script>

<style lang="scss" scoped></style>
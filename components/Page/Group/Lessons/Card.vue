<template>
    <div @click="(e) => toRoute(e, lessoncarddata.id)" class="r_12 overflow-hidden bg_white pcursor relative">
        <a-dropdown v-if="editable && isLoading.user?.current_role == 'admin'">
            <div class="!bg-white r_8 absolute right-2 top-2 py-1 threedot">
                <img loading="lazy" class="rotate-90 h-5 threedot" src="@/assets/svg/icon/threedot.svg" alt="">
            </div>
            <template #overlay>
                <a-menu>
                    <a-menu-item @click="handleButton('edit', lessoncarddata.id)">
                        <a href="javascript:;">Tahrirlash</a>
                    </a-menu-item>
                    <a-menu-item @click="handleButton('delete', lessoncarddata.id)">
                        <a href="javascript:;">O'chirisih</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
        <img loading="lazy" class="aspect-video w-full object-cover" :src="lessoncarddata?.cover" alt="">
        <div class="p-3 space-y-1">
            <h1 class="font-bold">{{ lessoncarddata.title }}</h1>
            <pre class="whitespace-pre-line line-clamp-2">
        {{ lessoncarddata.description }}
    </pre>
            <ul class="flex items-center gap-2 text-sm">
                <li class="full_flex gap-1">
                    <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt="">
                    <span class="c_gold font-semibold">{{ lessoncarddata.likes_count }}</span>
                </li>
                <li class="font-semibold">
                    {{ lessoncarddata.price }} UZS
                </li>
            </ul>
            <a-progress class="w-full" stroke-color="#16224B"
                :percent="lessoncarddata.finished_count * 100 / lessoncarddata.lessons_count" :size="3" />
            <p class="text-sm !-mt-2 pb-3">{{ lessoncarddata.finished_count }}/{{ lessoncarddata.lessons_count }}
                tugatilgan
            </p>
            <div class="flex items-center text-sm pt-2 pcursor border-t border-navy">
                <div class="flex items-center -space-x-2 w-[80%] py-2 overflow-hidden overflow-x-auto removeScroll">
                    <img loading="lazy" v-for="i in 16" class="h-7 w-7 min-w-[28px] r_f object-cover"
                        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
                        alt="">
                </div>
                <button class="c_ca1 pl-2 whitespace-nowrap">225</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCoursesStore, useLoadingStore } from '~/store';

const props = defineProps({
    lessoncarddata: Object,
    editable: {
        default: true,
        type: Boolean,
    }
})
const router = useRouter();

const useCourses = useCoursesStore();
const isLoading = useLoadingStore();

function handleButton(type, id) {
    useCourses.store.course_id = id;
    isLoading.modal[type] = true;
    if (type == 'edit') {
        for (let i in useCourses.create) {
            useCourses.create[i] = props.lessoncarddata[i];
        }
        useCourses.store.image = props.lessoncarddata.cover;
        isLoading.modal.create = true;
    }
}

function toRoute(e, id) {
    if (!e.target.className.includes('threedot')) {
        router.push(`/course/${id}`)
    }
}
</script>

<style lang="scss" scoped>
// .course_user {
// background: linear-gradient(to left, transparent, #f5f5f5 10%, transparent);
// backdrop-filter: blur(10px);
// pointer-events: none;
// }</style>
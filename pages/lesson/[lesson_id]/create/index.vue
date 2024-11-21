<template>
    <div class="flex h-full">
        <div class="w-full h-full">
            <h1 class="h-16 -mt-5 full_flex !justify-start text-xl font-semibold border-b border-[#EDEDED]">Mavzuni
                yaratishni boshlang:</h1>
            <div class="max-h-[calc(100vh_-_225px)] overflow-y-auto overflow-hidden">
                <section class="space-y-5">
                    <!-- <video src=""></video> -->
                    <div class="w-full h-[312px] bg-black r_8">
                        <video capture v-if="useLessons.store.create.video" class="w-full h-[312px] bg-black r_8"
                            controls>
                            <source :src="useLessons.store.create.video" type="video/mp4">
                            <source :src="useLessons.store.create.video" type="video/ogg">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h1 class="px-5 text-xl font-semibold">{{ useLessons.create.title }}</h1>
                    <p class="px-5" v-html="useLessons.create.content"></p>
                </section>
                <section class="full_flex h-full py-10">
                    <ul class="flex gap-10 text-center font-medium">
                        <li @click="openModal('video')" class="space-y-4 pcursor">
                            <div class="bg_cf3 w-20 h-20 full_flex r_f">
                                <img src="@/assets/svg/group/video.svg" alt="">
                            </div>
                            <p>Video</p>
                        </li>
                        <li @click="openModal('title')" class="space-y-4 pcursor">
                            <div class="bg_cf3 w-20 h-20 full_flex r_f">
                                <img src="@/assets/svg/group/text.svg" alt="">
                            </div>
                            <p>Title</p>
                        </li>
                        <li @click="openModal('text')" class="space-y-4 pcursor">
                            <div class="bg_cf3 w-20 h-20 full_flex r_f">
                                <img src="@/assets/svg/group/text.svg" alt="">
                            </div>
                            <p>Tekst</p>
                        </li>
                        <li @click="openModal('image')" class="space-y-4 pcursor">
                            <div class="bg_cf3 w-20 h-20 full_flex r_f">
                                <img src="@/assets/svg/group/image.svg" alt="">
                            </div>
                            <p>Rasm</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <aside class="min-w-[292px]">
            <h1 class="h-16 -mt-5 full_flex !justify-start text-xl font-semibold border-b border-[#EDEDED]">Kontent
                qo'shing</h1>
            <div class="max-h-[calc(100vh_-_225px)] overflow-y-auto overflow-hidden">
                <ul class="grid grid-cols-2 text-center font-medium">
                    <li @click="openModal('video')" class="full_flex flex-col h-[120px] b_ced space-y-2 pcursor">
                        <img src="@/assets/svg/group/video.svg" alt="">
                        <p>Video</p>
                    </li>
                    <li @click="openModal('title')" class="full_flex flex-col h-[120px] b_ced space-y-2 pcursor">
                        <img src="@/assets/svg/group/text.svg" alt="">
                        <p>Title</p>
                    </li>
                    <li @click="openModal('text')" class="full_flex flex-col h-[120px] b_ced space-y-2 pcursor">
                        <img src="@/assets/svg/group/text.svg" alt="">
                        <p>Tekst</p>
                    </li>
                    <li @click="openModal('image')" class="full_flex flex-col h-[120px] b_ced space-y-2 pcursor">
                        <img src="@/assets/svg/group/image.svg" alt="">
                        <p>Rasm</p>
                    </li>
                    <li class="full_flex flex-col h-[120px] b_ced space-y-2 pcursor">
                        <img src="@/assets/svg/group/settings.svg" alt="">
                        <p>Sozlamalar</p>
                    </li>
                </ul>
                <div class="b_ced !border-x-0 -mt-[1px] space-y-6 py-8">
                    <p class="font-medium">Resurslarni biriktiring</p>
                    <button class="full_flex gap-3 b_ced py-[10px] rounded-full w-full">
                        <img src="@/assets/svg/group/upload.svg" alt="">
                        <span>Fayl biriktirish</span>
                    </button>
                </div>
                <div class="space-y-5 py-6">
                    <button @click="useLessons.createLesson('create')"
                        class="bg_main text-white w-full rounded-full py-3">Davom etish</button>
                    <button class="bg_green text-white w-full rounded-full py-3">Qoralamaga qo‘shish</button>
                    <button class="c_c55 underline text-white w-full rounded-full py-3">Oldindan ko‘rish</button>
                </div>
            </div>
        </aside>
    </div>
    <UIModal :isOpen="useLessons.store.modal.create" @update:isOpen="(value) => handleModal(value)">
        <div v-if="['video', 'image'].includes(store.file_type)">
            <label for="file_input" class="block pcursor">
                <div class="w-full text-center space-y-10 r_8 py-10 border border-dashed border-[#EDEDED]">
                    <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                    <p class="w-1/2 mx-auto">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
                </div>
            </label>
        </div>
        <div v-else-if="store.file_type == 'text'">
            <a-textarea v-model:value="useLessons.store.create.content"
                placeholder="Autosize height with minimum and maximum number of lines"
                :auto-size="{ minRows: 2, maxRows: 10 }" />
        </div>
        <div v-else>
            <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                v-model="useLessons.store.create.title" :label="'Title'" required />
        </div>
        <div class="file_input">
            <input @change="handleVideo" id="file_input" class="file_input" type="file">
        </div>
    </UIModal>
</template>

<script setup>
import { useLessonsStore } from '~/store';

const useLessons = useLessonsStore();

const store = reactive({
    file_type: '',
})

function handleModal(value) {
    if (value == "OK") {
        useLessons.store.modal.create = false;
        if (store.file_type == 'text') {
            useLessons.create.content += useLessons.store.create.content;
            useLessons.store.create.content = "";
        } else if (store.file_type == 'title') {
            useLessons.create.title = useLessons.store.create.title;
        }
    } else {
        useLessons.store.modal.create = value
    }
}

function openModal(type) {
    store.file_type = type;
    useLessons.store.modal.create = true
}

function handleVideo(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    if (store.file_type == 'video') {
        useLessons.store.create.video = imageUrl;
        useLessons.create.video = file;
    } else if (store.file_type == 'image') {
        useLessons.create.content += ` <img src="${imageUrl}" alt="">`;
    }
    useLessons.store.modal.create = false;
}
</script>

<style lang="scss" scoped></style>
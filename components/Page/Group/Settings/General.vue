<template>
    <section>
        <div class="flex flex-wrap md:gap-10 gap-4 mb-5">
            <div class="flex gap-5" @click="general.filetype = 'icon'">
                <div class="relative imagelabel" v-if="url">
                    <button @click="() => { url = ''; icon.file = '' }" type="button"
                        class="absolute deleteimage z-10 bg-white !hidden top-2 right-2 rounded-full w-7 h-7 full_flex border p-2">
                        <img src="@/assets/svg/icon/closex.svg" alt="" />
                    </button>
                    <img v-if="url" :src="url" alt="" class="h-[60px] w-[60px] bg_cf2 r_8 object-cover" />
                </div>
                <label for="upload_icon" v-else class="h-[60px] w-[60px] bg_cf2 r_8"></label>
                <div class="space-y-1">
                    <p class="font-semibold">Belgi</p>
                    <p class="text-xs">Tavsiya etiladi:</p>
                    <p class="text-xs pb-2">128x128</p>
                    <label class="b_main c_main px-3 r_8 uppercase py-2.5 full_flex" for="upload_icon">
                        o'zgartirish
                    </label>
                </div>
                <div class="file_input">
                    <input @change="(e) => handleGeneralFile(e, 'icon')" type="file" id="upload_icon" accept="image/*"
                        class="h-0 w-0 overflow-hidden block !p-0" />
                </div>
            </div>
            <div @click="general.filetype = 'cover'" class="flex gap-5">
                <div class="relative imagelabel" v-if="useGroups.store.image">
                    <button type="button"
                        class="absolute deleteimage z-10 bg-white !hidden top-2 right-2 rounded-full w-7 h-7 full_flex border p-2">
                        <img src="@/assets/svg/icon/closex.svg" alt="" />
                    </button>
                    <img :src="useGroups.store.image" alt=""
                        class="md:h-[144px] h-[105px] md:w-[271px] w-[195px] bg_cf2 r_8 object-cover" />
                </div>
                <label for="upload_cover" v-else
                    class="md:h-[144px] h-[105px] md:w-[271px] w-[195px] bg_cf2 r_8"></label>
                <div class="space-y-1">
                    <p class="font-semibold">Muqova</p>
                    <p class="text-xs">Tavsiya etiladi:</p>
                    <p class="text-xs pb-2">1084x576</p>
                    <label class="b_main c_main px-3 r_8 uppercase py-2.5 full_flex" for="upload_cover">
                        o'zgartirish
                    </label>
                    <div class="file_input">
                        <input @change="handleImage" id="upload_cover" class="file_input" type="file" accept="image/*">
                    </div>
                    <!-- <div class="file_input">
                        <input @change="(e) => handleGeneralFile(e, 'cover')" type="file" id="upload_cover"
                            class="h-0 w-0 overflow-hidden block !p-0" accept="image/*" />
                    </div> -->
                </div>
            </div>
        </div>
        <div class="space-y-5">
            <FloatingInput :id="'name'" :maxValue="50" class="w-full" type="text" v-model="useGroups.create.title"
                :label="'Guruh nomi'" required />

            <!-- <FloatingInput :id="'url'" class="w-full" type="text" v-model="useGroups.create.url"
                :label="'Url'" required /> -->

            <div class="space-y-2">
                <label for="description" class="_ca1 text-xs">Tavsif</label>
                <a-textarea id="description" v-model:value="useGroups.create.description"
                    placeholder="Tavsif kiriting" :auto-size="{ minRows: 2, maxRows: 10 }" />
            </div>

            <div class="grid md:grid-cols-2 md:gap-20 items-end gap-4">
                <FloatingInput disabled="true" :id="'initials'" class="w-full" type="text"
                    v-model="useGroups.store.group.title" :label="'Bosh harflar'" required />
                <div class="flex gap-3 items-end">
                    <p class="h-10 min-w-[40px] r_8" :style="`background: #000`"></p>
                    <div class="space-y-2 w-full">
                        <label for="initials" class="_ca1 text-xs">Rang</label>
                        <div>
                            <a-select class="w-full" v-model="useGroups.create.color" placeholder="Rangni tanlang"
                                <a-option :key="i" :label="i" :value="i" v-for="i in colors_list"
                                    @click="useGroups.create.color = i" class="h-10 bg-[#009e5d] r_8"
                                    :style="`background: ${i}`">{{ i }}</a-option>
                                <template #suffixIcon>
                                    <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
                                </template>
                            </a-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-5">
                <label @click="useGroups.create.group_type = 'private'" class="space-y-3 r_8 p-5 cursor-pointer" :class="useGroups.create.group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input @focus="useGroups.create.group_type = 'private'" v-model="group_type" :checked="useGroups.create.group_type == 'private'
                            ? true
                            : false
                            " id="private" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/private.svg" alt="" /> -->
                            Yopiq
                        </div>
                    </div>
                    <p>
                        Faqat a'zolar guruhda kimlar borligini va ular nima joylashtirganini ko'ra oladi. Kontent
                        qidiruv tizimlaridan yashirin bo'ladi.
                    </p>
                </label>
                <label @click="useGroups.create.group_type = 'public'" class="space-y-3 r_8 p-5 cursor-pointer" :class="useGroups.create.group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input :checked="useGroups.create.group_type == 'public' ? true : false
                            " id="public" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/public.svg" alt="" /> -->
                            Ochiq
                        </div>
                    </div>
                    <p>
                        Har kim guruhda kimlar borligini va ular nima joylashtirganini ko'ra oladi. Kontent qidiruv
                        tizimlarida topiladi.
                    </p>
                </label>
            </div>
        </div>
        <button @click="updateGroup" class="px-6 py-2.5 b_ccc c_ccc r_8 md:mt-6 mt-4">
            SOZLAMALARNI YANGILASH
        </button>
    </section>
</template>

<script setup>
import { useGroupsStore, useLoadingStore } from '~/store';


const useGroups = useGroupsStore();
const isLoading = useLoadingStore();
const router = useRouter();
const colors_list = [
    "#009e5d",
    "#ff6900",
    "#0693e3",
    "#e4a511",
    "#df1a1a",
    "#bb6ee7",
    "#21b8a6",
    "#e9597f",
    "#767676",
    "#956228",
];

await useGroups.getGroupById();
fillInputs();

function fillInputs() {
    for (let i in useGroups.store.group) {
        useGroups.create[i] = useGroups.store.group[i]
    }
    useGroups.store.image = useGroups.store.group.cover
}


function handleImage(e) {
    const file = e.target.files[0];
    useGroups.store.image = URL.createObjectURL(file);
    useGroups.create.file = file;
}

async function updateGroup() {
    useGroups.store.group_id = router.currentRoute.value.params.group_id;
    await useGroups.updateGroup()
    await useGroups.getGroupById();
    fillInputs();
}

</script>

<style lang="scss" scoped></style>
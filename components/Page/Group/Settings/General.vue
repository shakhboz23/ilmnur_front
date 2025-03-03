<template>
    <section>
        <div class="flex flex-wrap md:gap-10 gap-4 md:mb-0 mb-2">
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
                    <p class="font-semibold">Icon</p>
                    <p class="text-xs">Recommended:</p>
                    <p class="text-xs pb-2">128x128</p>
                    <label class="b_main c_main px-3 r_8 uppercase py-2.5 full_flex" for="upload_icon">
                        change
                    </label>
                </div>
                <div class="file_input">
                    <input @change="(e) => handleGeneralFile(e, 'icon')" type="file" id="upload_icon" accept="image/*"
                        class="h-0 w-0 overflow-hidden block !p-0" />
                </div>
            </div>
            <div @click="general.filetype = 'cover'" class="flex gap-5">
                <div class="relative imagelabel" v-if="image?.url">
                    <button type="button"
                        class="absolute deleteimage z-10 bg-white !hidden top-2 right-2 rounded-full w-7 h-7 full_flex border p-2">
                        <img src="@/assets/svg/icon/closex.svg" alt="" />
                    </button>
                    <img :src="image?.url" alt=""
                        class="md:h-[144px] h-[105px] md:w-[271px] w-[195px] bg_cf2 r_8 object-cover" />
                </div>
                <label for="upload_cover" v-else
                    class="md:h-[144px] h-[105px] md:w-[271px] w-[195px] bg_cf2 r_8"></label>
                <div class="space-y-1">
                    <p class="font-semibold">Cover</p>
                    <p class="text-xs">Recommended:</p>
                    <p class="text-xs pb-2">1084x576</p>
                    <label class="b_main c_main px-3 r_8 uppercase py-2.5 full_flex" for="upload_cover">
                        change
                    </label>
                    <div class="file_input">
                        <input @change="(e) => handleGeneralFile(e, 'cover')" type="file" id="upload_cover"
                            class="h-0 w-0 overflow-hidden block !p-0" accept="image/*" />
                    </div>
                </div>
            </div>
        </div>
        <div class="space-y-5">
            <div class="space-y-2">
                <label for="name" class="_ca1 text-xs">Group name</label>
                <div>
                    <input id="name" v-model="name" @input="handleInput('input')" type="text" placeholder="Group name"
                        required />
                    <p class="text-end mt-1 _ca1">
                        {{ name?.length }}/50
                    </p>
                </div>
            </div>
            <div class="space-y-2 !mt-2">
                <label for="url" class="_ca1 text-xs">Url</label>
                <div>
                    <input class="_ca1" id="url" v-model="username" type="url" placeholder="Url" required />
                    <p class="mt-1 _ca1 text-xs">url</p>
                </div>
            </div>
            <el-input v-model="excerpt" autosize type="textarea" :placeholder="$t('membersmodal.general.groupdesc')" />
            <div class="grid md:grid-cols-2 md:gap-20 gap-4">
                <div class="space-y-2">
                    <label for="initials" class="_ca1 text-xs">Initials</label>
                    <div>
                        <input @input="handleInput('initials')" type="text" class="_ca1" id="initials"
                            v-model="initials" placeholder="Initials" required />
                    </div>
                </div>
                <div class="flex gap-3 items-end">
                    <p class="h-10 min-w-[40px] r_8" :style="`background: #000`"></p>
                    <div class="space-y-2 w-full">
                        <label for="initials" class="_ca1 text-xs">Color</label>
                        <div>
                            <a-select class="block w-full" v-model="color" placeholder="Select">
                                <a-select-option :key="i" :label="''" :value="i" v-for="i in colors_list"
                                    @click="color = i" class="h-10 bg-[#009e5d] r_8"
                                    :style="`background: ${i}`"></a-select-option>
                                <!-- <div>
                                    <p class="mt-2 mb- ml-5">Or create your color</p>
                                    <p class="ml-5 full_flex pb-3 r_8 w-[216px] overflow-hidden">
                                        <input v-model="color" class="r_8 !w-[320px] !h-10 overflow-hidden"
                                            :style="`background: ${color}`" type="color" />
                                    </p>
                                </div> -->
                            </a-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-5">
                <label @click="group_type = 'private'" class="space-y-3 r_8 p-5 cursor-pointer" :class="group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input @focus="group_type = 'private'" v-model="group_type" :checked="group_type == 'private'
                            ? true
                            : false
                            " id="private" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/private.svg" alt="" /> -->
                            Private
                        </div>
                    </div>
                    <p>
                        Only members can see who's in the group and what they post. Content is hidden from search
                        engines.
                    </p>
                </label>
                <label @click="group_type = 'public'" class="space-y-3 r_8 p-5 cursor-pointer" :class="group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input :checked="group_type == 'public' ? true : false
                            " id="public" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/public.svg" alt="" /> -->
                            Public
                        </div>
                    </div>
                    <p>
                        Anyone can see who's in the group and what they post. Content is discoverable by search engines.
                    </p>
                </label>
            </div>
        </div>
        <button class="px-6 py-2.5 b_ccc c_ccc r_8 md:mt-6 mt-4">
            UPDATE SETTINGS
        </button>
    </section>
</template>

<script setup>
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

</script>

<style lang="scss" scoped></style>
<template>
    <section v-loading="isLoading.isLoadingType('getPrices')">
            <h1 class="_c00 font-semibold text-xl">Subscriptions</h1>
            <p class="md:mt-5 mt-4 md:mb-8 mb-4 font-medium">
                Make money by charging a monthly subscription for access to your community.
            </p>
            <div v-for="i in group_prices"
              class="flex md:items-center justify-between whitespace-nowrap b_main r_8 mb-4 py-2 px-3 gap-3">
              <div class="flex flex-wrap items-center md:gap-10 gap-4">
                <div class="full_flex gap-1 h-9">
                  <img src="@/assets/svg/icon/price.svg" alt="" />
                  <p class="font-medium capitalize">{{ i.price == 0 ? 'Free' : i.price + ' UZS/' +
                    'MONTH' }}</p>
                </div>
                <p class="_c2a lowercase c_blue">{{ i.members }} Members</p>
                <button v-if="i.is_current" class="px-6 py-2 h-9 bg-[#6FCF97] text-white font-bold r_8">
                  Current price
                </button>
              </div>
              <a-dropdown>
                <button class="full_flex w-9 h-9">
                  <img src="@/assets/svg/icon/threedot.svg" alt="" />
                </button>
    <template #overlay>
      <a-menu>
        <a-menu-item v-loading="isLoading.isLoadingType('makeCurrent')"
                      @click="makeCurrent(i.id, i.is_current)"><span
                        :class="i.is_current ? '_ca1' : '_c07'">Make current</span></a-menu-item>
                    <a-menu-item v-loading="isLoading.isLoadingType('deletePrice')"
                      @click="deletePrice(i.id, i.is_deleted)">
                      <span :class="i.is_deleted
                        ? '_c07'
                        : '_ca1'
                        ">Delete price</span></a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
            </div>
            <button @click="openAddPrice" class="px-6 py-2.5 uppercase r_8 mt-2 font-semibold"
              :class="is_paid ? 'b_main c_main' : 'b_ccc c_ccc'">
              Add price
            </button>
            <div v-if="is_paid" class="space-y-2 p-2 bg-[#e0e0e071] rounded-lg md:mt-8 mt-4">
              <h1>{{ $t('payment.archivedgroup') }}</h1>
              <p>{{ $t("payment.addpriceinfo") }}</p>
              <button @click="reactive2 = true" class="px-6 b_cbc uppercase r_8 font-semibold">
                {{ $t("continue") }}
              </button>
            </div>
          </section>
</template>

<script setup>
import { useLoadingStore } from "@/store"

const isLoading = useLoadingStore();

const group_prices = [{
    price: 123,
    members: 123,
    is_current: true,
}, {
    price: 0,
    members: 12,
    is_current: false,
}]
</script>
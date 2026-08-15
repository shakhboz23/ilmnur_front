<template>
    <main>
        <section>
            <main id="main-content" class="mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div id="page-header" class="mb-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900">To'lovlar tarixi</h1>
                            <p class="mt-2 text-gray-600">Barcha kurs xaridlaringiz va to'lov tafsilotlarini kuzating</p>
                        </div>
                        <div v-if="useStripe.store.userGrouppaymentHistory?.payment?.length" class="flex items-center space-x-3">
                            <button
                                class="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                                <i class="mr-2 w-5" data-fa-i2svg=""><svg class="svg-inline--fa fa-download"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z">
                                        </path>
                                    </svg></i>
                                Yuklab olish
                            </button>
                            <button
                                class="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 flex items-center">
                                <i class="mr-2 w-5" data-fa-i2svg=""><svg class="svg-inline--fa fa-filter"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z">
                                        </path>
                                    </svg></i>
                                Filtr
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="!useStripe.store.userGrouppaymentHistory?.payment?.length" class="full_flex flex-col gap-4 _c07 h-[180px] r_8">
                    <img src="@/assets/svg/icon/card.svg" alt="">
                    Sizda to'lovlar mavjud emas.
                </div>
                <section v-else>
                    <div id="stats-overview" class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div class="bg-white rounded-xl p-6 shadow-sm border">
                            <div class="flex items-center">
                                <div class="p-3 bg-green-100 rounded-lg">
                                    <img class="w-5" src="@/assets/svg/payment/dollar.svg" alt="">
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-gray-600">Jami sarflangan</p>
                                    <p class="text-2xl font-bold text-gray-900">${{useStripe.store.userGrouppaymentHistory?.total?.total_payment}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl p-6 shadow-sm border">
                            <div class="flex items-center">
                                <div class="p-3 bg-blue-100 rounded-lg">
                                    <img class="w-5" src="@/assets/svg/payment/course.svg" alt="">
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-gray-600">Sotib olingan kurslar</p>
                                    <p class="text-2xl font-bold text-gray-900">{{useStripe.store.userGrouppaymentHistory?.total?.purchased_courses_count}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl p-6 shadow-sm border">
                            <div class="flex items-center">
                                <div class="p-3 bg-purple-100 rounded-lg">
                                    <img class="w-5" src="@/assets/svg/payment/month.svg" alt="">
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-gray-600">Shu oy</p>
                                    <p class="text-2xl font-bold text-gray-900">${{useStripe.store.userGrouppaymentHistory?.total?.total_monthly_payment}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl p-6 shadow-sm border">
                            <div class="flex items-center">
                                <div class="p-3 bg-orange-100 rounded-lg">
                                    <img class="w-5" src="@/assets/svg/payment/rating.svg" alt="">
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-gray-600">O'rtacha reyting</p>
                                    <p class="text-2xl font-bold text-gray-900">4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="payment-table-section" class="bg-white rounded-xl shadow-sm border">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-gray-900">So'nggi tranzaksiyalar</h2>
                                <div class="flex items-center space-x-3">
                                    <div class="relative">
                                        <input type="text" placeholder="Tranzaksiyalarni qidirish..."
                                            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
                                        <i class="absolute left-3 top-3 text-gray-400 text-sm" data-fa-i2svg=""><svg
                                                class="svg-inline--fa fa-magnifying-glass" aria-hidden="true"
                                                focusable="false" data-prefix="fas" data-icon="magnifying-glass"
                                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                                </path>
                                            </svg></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="payment-table" class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Kurs</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sana</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Summa</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Holat</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Usul</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Amallar</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="history in useStripe.store.userGrouppaymentHistory?.payment" class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div
                                                    class="h-10 w-10 rounded-lg flex items-center justify-center">
                                                    <img class="r_8" :src="history.course?.cover" alt="">
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {{ history.course?.title }}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {{ formatDate(history.createdAt) }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            ${{ history.amount }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span
                                                :class="history.status == 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-80'"
                                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                                                {{ history.status }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div class="flex items-center">
                                                <i class="text-blue-600 mr-2" data-fa-i2svg=""><svg
                                                        class="svg-inline--fa fa-cc-visa" aria-hidden="true"
                                                        focusable="false" data-prefix="fab" data-icon="cc-visa"
                                                        role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512" data-fa-i2svg="">
                                                        <path fill="currentColor"
                                                            d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z">
                                                        </path>
                                                    </svg></i>
                                                •••• 4242
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button class="text-primary hover:text-blue-600 mr-3">
                                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-download"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="download" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                        data-fa-i2svg="">
                                                        <path fill="currentColor"
                                                            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z">
                                                        </path>
                                                    </svg></i>
                                            </button>
                                            <button class="text-gray-400 hover:text-gray-600">
                                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-ellipsis"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="ellipsis" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                        data-fa-i2svg="">
                                                        <path fill="currentColor"
                                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z">
                                                        </path>
                                                    </svg></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="pagination" class="px-6 py-4 border-t border-gray-200">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center text-sm text-gray-700 gap-1">
                                    <span class="font-medium">1</span> dan <span class="font-medium">4</span> gacha,
                                    jami <span class="font-medium">12</span> ta natija
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button
                                        class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                        Oldingi
                                    </button>
                                    <button
                                        class="px-3 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md">
                                        1
                                    </button>
                                    <button
                                        class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                        2
                                    </button>
                                    <button
                                        class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                        3
                                    </button>
                                    <button
                                        class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                        Keyingi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer id="footer" class="bg-white border-t mt-12">
                        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <h2 class="text-xl font-bold text-primary">IlmNur</h2>
                                    <p class="ml-4 text-sm text-gray-500">© 2025 Barcha huquqlar himoyalangan.</p>
                                </div>
                                <div class="flex items-center space-x-6">
                                    <span class="text-gray-500 hover:text-primary text-sm cursor-pointer">Maxfiylik
                                        siyosati</span>
                                    <span class="text-gray-500 hover:text-primary text-sm cursor-pointer">Foydalanish
                                        shartlari</span>
                                    <span class="text-gray-500 hover:text-primary text-sm cursor-pointer">Yordam</span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </section>
    </main>
</template>

<script setup>
import { useStripeStore } from '~/store';

const useStripe = useStripeStore();

useStripe.getUserGroupPaymentHistory();
</script>

<style lang="scss" scoped>
i {
    width: 20px;
}
</style>

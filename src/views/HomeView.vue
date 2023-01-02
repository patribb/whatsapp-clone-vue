<template>
    <div class="flex">
     <div id="Header" class="fixed w-[420px] z-10">
        <div class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2">
            <img class="rounded-full ml-1 w-10" :src="userStore.picture || ''" alt="" />
            <div class="flex items-center justify-center">
             <AccountGroupIcon  class="mr-6 text-gray-500" />
             <DotsVerticalIcon @click="logout" class="cursor-pointer text-gray-500" />
            </div>
        </div>
        <div id="Search" class="bg-white w-full px-2 border-b shadow-sm">
            <div class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounder-md">
                <MagnifyIcon class="text-gray-500 ml-2" :size="18" />
                <input 
                @click="showFindFriends = !showFindFriends"
                type="text" class="ml-5 appearance-none w-full bg-[#f0f0f0] py-1.5 px-2.5
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500" 
                 auto-complete="off" placeholder="Start a new Chat"/>
            </div>
        </div>
     </div>
     <div v-if="showFindFriends" class="">
        <ChatsView class="mt-[100px]" />
     </div>
     <div v-else>
        <FindFriendsView class="pt-28" />
     </div>
     <div v-if="userDataForChat.length"><MessageView /></div>
     <div v-else>
        <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center">
        <div class="grid h-screen place-items-center">
            <div class="">
                <div class="w-full flex items-center justify-center">
                    <img width="375" src="w-web-not-loaded-chat.png" alt="Not Loaded Chat" />
                </div>
                <div class="text-[22px] text-gray-500 font-light mt-10">WhatsApp Web</div>
                <div class="text-[14px] text-gray-600 font-light mt-2">
                    <div>Send and receive messages without keeping your phone online.</div>
                    <div>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</div>
                </div>
            </div>
        </div>
     </div>
     </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ChatsView from './ChatsView.vue'
import MessageView from './MessageView.vue'
import FindFriendsView from './FindFriendsView.vue'
import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import {useUserStore} from '@/store/user-store';
import {useRouter} from 'vue-router';
import { storeToRefs } from 'pinia'

const router = useRouter();
const userStore = useUserStore();
const {showFindFriends, userDataForChat} = storeToRefs(userStore)

onMounted(async () => {
    try {
        userStore.getAllUsers()
        await userStore.getAllChatsByUser()
    } catch (error) {
        console.log(error)
    }
})

const logout = () => {
    let res = confirm('Are you sure you want to log out?')
    if (res) userStore.logout(); router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>
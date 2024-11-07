<template>
    <nav>
        <div class="navbar" :class="{ 'is-open': isSidebarOpen }">
            <img src="../assets/Frame 1321317771.png" alt="" height="25px">

            <ul class="nav-links">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/plots" active-class="active">Plots</router-link></li>
                <li><router-link to="/about" active-class="active">About</router-link></li>
                <li><router-link to="/contact" active-class="active">Contact</router-link></li>
            </ul>

            <div class="nav-buttons">
                <button class="login-button">Login</button>
                <button class="signup-button">Register</button>
            </div>

            <div class="openNav" @click="toggleSidebar">
                ☰
            </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar" :class="{ 'is-open': isSidebarOpen }">
            <ul class="links">
                <li class="closeNav" @click="toggleSidebar">X</li>

                <li><router-link to="/" @click="toggleSidebar">Home</router-link></li>
                <li><router-link to="/plots" @click="toggleSidebar">Plots</router-link></li>
                <li><router-link to="/about" @click="toggleSidebar">About</router-link></li>
                <li><router-link to="/contact" @click="toggleSidebar">Contact</router-link></li>
            </ul>
            <div class="buttons">
                <button class="login-button">Login</button>
                <button class="signup-button">Register</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
};
</script>



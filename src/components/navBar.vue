<template>
    <div class="navbar container-fluid">
        <h3 class="brand">
            plotvista
        </h3>

        <ul class="links" :class="{ show: isOpen }">
            <!-- <router-link to="/"> -->
            <li class="active">
                Home
            </li>
            <!-- </router-link> -->
            <li>
                Plots
            </li>
            <li>
                About
            </li>
            <li>
                Contacts
            </li>
        </ul>

        <div class="buttons" :class="{ show: isOpen }">
            <button class=" login-button">Login</button>
            <button class="signup-button">Register</button>
        </div>

        <div class="toggle-button" @click="toggleNavbar">
            X
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen
        }
    }
}

</script>


<style scoped>
.navbar {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 0 25px 25px;
    /* position: fixed; */
    /* width: 100%; */
    /* top: 0; */
}

.brand {
    text-transform: uppercase;
    font-weight: bolder;
    margin: 0;
}

.links {
    margin: 0;
    padding: 0;
}

.links li {
    list-style-type: none;
    display: inline-block;
    margin: 0px 15px;
}

.active {
    color: #004E95;
    font-weight: bolder;
}

.login-button {
    all: unset;
    padding: 8px 25px;
    font-weight: bolder;
}

.signup-button {
    all: unset;
    padding: 8px 25px;
    border: 2px solid #004E95;
    border-radius: 8px;
    font-weight: bolder;
}

.toggle-button {
    display: none;
}

@media (max-width: 768px) {

.navbar {
    padding: 5px 15px;
}

    .toggle-button {
        display: block;
    }

    .links {
        display: none;
    }

    .buttons {
        display: none;
    }

    .show {
        display: block;
    }
}
</style>
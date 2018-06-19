<template lang="html">
  <v-layout row justify-center>
   <v-dialog v-model="options.isVisible" persistent max-width="290">
     <v-card>
       <v-card-title class="headline">{{options.title}}</v-card-title>
       <v-card-text>{{options.text}}</v-card-text>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color="green darken-1" flat @click.native="hideConfirm">取消</v-btn>
         <v-btn color="error" flat @click.native="dialog = false">确定</v-btn>
       </v-card-actions>
     </v-card>
   </v-dialog>
 </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "confirm",
  computed: {
    ...mapGetters({
      options: 'confirmOptions'
    }),
  },
  methods: {
    ...mapActions(['hideConfirm'])
  }
}
</script>

<template lang="html">
  <div class="permission">
    <v-container grid-list-xs,sm,md,lg,xl>
      <v-btn color="primary" @click="addPermission">添加</v-btn>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1 mt-3"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="">{{ props.item.calories }}</td>
          <td class="">{{ props.item.fat }}</td>
          <td class="">{{ props.item.carbs }}</td>
          <td class="">{{ props.item.protein }}</td>
        </template>
      </v-data-table>
      <v-layout row justify-center >
        <v-dialog v-model="dialog" max-width="500px">
          <v-card light color="grey lighten-5">
            <v-card-title>
              <span class="headline">新增模块</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="Legal first name" required solo></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                      autocomplete
                      chips
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'permission',
  data() {
    return {
      dialog: false,
      headers: [{
          text: '模块名称',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: '路径',
          value: 'calories'
        },
        {
          text: '权限编码',
          value: 'fat'
        },
        {
          text: '状态',
          value: 'carbs'
        },
        {
          text: '操作',
          value: 'protein'
        }
      ],
      desserts: [{
          id: false,
          pid: 'Frozen Yogurt',
          funname: 159,
          funcode: 24,
          url: 4.0,
          icon: '',
          sort: '',
          status: ''
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ]
    }
  },
  methods: {
    addPermission() {
      this.dialog = true
    }
  }
}
</script>

<style lang="scss">
</style>

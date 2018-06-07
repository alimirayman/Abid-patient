<template>
  <div>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>Profile</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="blue lighten-2">
                  <v-container>
                    <v-layout>
                      <v-flex sm2>
                        <div class="title">Who</div>
                      </v-flex>
                      <v-flex sm10>
                        <v-container pa-0>
                          <v-layout>
                            <v-flex xs1>Name:</v-flex>
                            <v-flex xs3>Ayman Ali</v-flex>
                            <v-flex xs1>ID:</v-flex>
                            <v-flex xs3>555</v-flex>
                            <v-flex xs1>Sex:</v-flex>
                            <v-flex xs3>Male</v-flex>
                          </v-layout>
                        </v-container>
                        <v-container pa-0>
                          <v-layout>
                            <v-flex xs1>Maried:</v-flex>
                            <v-flex xs3>Yes</v-flex>
                            <v-flex xs1>DOB:</v-flex>
                            <v-flex xs3>29-08-1995</v-flex>
                            <v-flex xs1>NID:</v-flex>
                            <v-flex xs3>2321-123123-231</v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card color="blue lighten-2">
                  <v-container>
                    <v-layout>
                      <v-flex sm2>
                        <div class="title">Contact</div>
                      </v-flex>
                      <v-flex sm10>
                        <v-container pa-0>
                          <v-layout>
                            <v-flex xs1>Address:</v-flex>
                            <v-flex xs3>Ayman Ali</v-flex>
                            <v-flex xs1>ID:</v-flex>
                            <v-flex xs3>555</v-flex>
                            <v-flex xs1>Sex:</v-flex>
                            <v-flex xs3>Male</v-flex>
                          </v-layout>
                        </v-container>
                        <v-container pa-0>
                          <v-layout>
                            <v-flex xs1>Maried:</v-flex>
                            <v-flex xs3>Yes</v-flex>
                            <v-flex xs1>DOB:</v-flex>
                            <v-flex xs3>29-08-1995</v-flex>
                            <v-flex xs1>NID:</v-flex>
                            <v-flex xs3>2321-123123-231</v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card color="blue lighten-2">
                  <v-container>
                    <v-layout>
                      <v-flex sm2>
                        <div class="title">Who</div>
                      </v-flex>
                      <v-flex sm10>
                        <v-container pa-0>
                          <v-layout>
                            <v-flex xs1>Name:</v-flex>
                            <v-flex xs3>Ayman Ali</v-flex>
                            <v-flex xs1>ID:</v-flex>
                            <v-flex xs3>555</v-flex>
                            <v-flex xs1>Sex:</v-flex>
                            <v-flex xs3>Male</v-flex>
                          </v-layout>
                        </v-container>
                        <v-container pa-0>
                          <v-layout>
                            <v-flex xs1>Maried:</v-flex>
                            <v-flex xs3>Yes</v-flex>
                            <v-flex xs1>DOB:</v-flex>
                            <v-flex xs3>29-08-1995</v-flex>
                            <v-flex xs1>NID:</v-flex>
                            <v-flex xs3>2321-123123-231</v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>Habits</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="blue lighten-2">
                  <v-container>
                    <v-layout>
                      <v-flex xs1>Name:</v-flex>
                      <v-flex xs3>Ayman Ali</v-flex>
                      <v-flex xs1>ID:</v-flex>
                      <v-flex xs3>555</v-flex>
                      <v-flex xs1>Sex:</v-flex>
                      <v-flex xs3>Male</v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex xs1>Name:</v-flex>
                      <v-flex xs3>Ayman Ali</v-flex>
                      <v-flex xs1>ID:</v-flex>
                      <v-flex xs3>555</v-flex>
                      <v-flex xs1>Sex:</v-flex>
                      <v-flex xs3>Male</v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 6 }
      ]
    })
  }
</script>

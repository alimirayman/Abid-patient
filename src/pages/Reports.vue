<template>
  <div>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>Radiological Report</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md3 v-for="(report, i) in reports" :key="i">
                <v-card>
                  <v-card-media
                    class="white--text"
                    height="200px"
                    :src="report.image"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">{{report.text}}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
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
          <v-toolbar-title>Biochemical Report</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-data-table
              :headers="headers"
              :items="details"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.spe }}</td>
                <td>{{ props.item.val }}</td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reports: [
        {
          image: 'http://www.radiologyassistant.nl/data/bin/w440/a5299cac55342c_2-consolidation-typical.jpg',
          text: 'Report 1'
        },
        {
          image: 'https://cdn1.medicalnewstoday.com/content/images/articles/173/173312/knee-x-ray.jpg',
          text: 'Bone Fracture'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Structural_MRI_animation.ogv/220px--Structural_MRI_animation.ogv.jpg',
          text: 'MRI'
        }
      ],
      headers: [
        { text: 'Specimen / Subject', align: 'left', sortable: false, value: 'spe' },
        { text: 'Value / Result', value: 'val' }
      ],
      details: [
        {
          value: false,
          spe: 'Maxpro 20',
          val: '12-02-2018'
        },
        {
          value: false,
          spe: 'Maxpro 20',
          val: '12-02-2018'
        }
      ]
    }
  }
}
</script>


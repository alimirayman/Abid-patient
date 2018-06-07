<template>
  <div>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>MEDICATIONS</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-data-table
              :headers="headers1"
              :items="details1"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.drug }}</td>
                <td>{{ props.item.start }}</td>
                <td>{{ props.item.end }}</td>
                <td>{{ props.item.issue }}</td>
                <td>{{ props.item.ref }}</td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>MEDICATIONS ALLERGY LIST</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-data-table
              :headers="headers2"
              :items="details2"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.drug }}</td>
                <td>{{ props.item.start }}</td>
                <td>{{ props.item.end }}</td>
                <td>{{ props.item.issue }}</td>
                <td>{{ props.item.ref }}</td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>LAB RESULTS</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-data-table
              :headers="headers3"
              :items="details3"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.drug }}</td>
                <td>{{ props.item.start }}</td>
                <td>{{ props.item.end }}</td>
                <td>{{ props.item.issue }}</td>
                <td>{{ props.item.ref }}</td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-flex xs12 sm6 ma-3>
        <v-toolbar color="blue darken-2" dark>
          <v-toolbar-title>TREATMENT RESULTS</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid grid-list-md>
            <v-data-table
              :headers="headers4"
              :items="details4"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.drug }}</td>
                <td>{{ props.item.start }}</td>
                <td>{{ props.item.end }}</td>
                <td>{{ props.item.issue }}</td>
                <td>{{ props.item.ref }}</td>
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
        headers1: [
          {
            text: 'Drug',
            align: 'left',
            sortable: false,
            value: 'drug'
          },
          { text: 'Start Date', value: 'start' },
          { text: 'End Date', value: 'end' },
          { text: 'Issue', value: 'issue' },
          { text: 'Refferer', value: 'ref' }
        ],
        details1: [
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          },
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          }
        ],
        headers2: [
          {
            text: 'Drug',
            align: 'left',
            sortable: false,
            value: 'drug'
          },
          { text: 'Start Date', value: 'start' },
          { text: 'End Date', value: 'end' },
          { text: 'Issue', value: 'issue' },
          { text: 'Refferer', value: 'ref' }
        ],
        details2: [
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          },
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          }
        ],
        headers3: [
          {
            text: 'Drug',
            align: 'left',
            sortable: false,
            value: 'drug'
          },
          { text: 'Start Date', value: 'start' },
          { text: 'End Date', value: 'end' },
          { text: 'Issue', value: 'issue' },
          { text: 'Refferer', value: 'ref' }
        ],
        details3: [
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          },
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          }
        ],
        headers4: [
          {
            text: 'Drug',
            align: 'left',
            sortable: false,
            value: 'drug'
          },
          { text: 'Start Date', value: 'start' },
          { text: 'End Date', value: 'end' },
          { text: 'Issue', value: 'issue' },
          { text: 'Refferer', value: 'ref' }
        ],
        details4: [
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          },
          {
            value: false,
            drug: 'Maxpro 20',
            start: '12-02-2018',
            end: '15-02-2018',
            ref: 'Dr. ABC',
            issue: 'Acidity and Fever'
          }
        ]
      }
    }
  }
</script>

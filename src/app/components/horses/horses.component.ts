import { Component, OnInit } from '@angular/core';
import { HorsesService } from '../../services/horses.service'

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.scss']
})
export class HorsesComponent implements OnInit {
  horses: any;
  horse: any = { dob: "" };
  horseKeys: any[];
  createForm: boolean = false;
  editMode: boolean = false;
  horsesHeader: String[] = [
    'horse_name',
    'horse_number',
    'age_verified',
    'dob',
    'color',
    'ushja_registered',
    'action'
  ]
  constructor(private horsesService: HorsesService) { }

  ngOnInit() {
    this.getHorses()
  }
  getHorses() {
    this.horsesService.getHorses().subscribe(res => {
      this.horsesService.horses = res.data
      this.horses = this.horsesService.horses
    })
  }
  setHorse(item) {
    this.horse = item
    this.createForm = true
    this.editMode = true
  }
  deleteHorse(item) {
    this.horsesService.deleteHorse(item);
  }
  getHorse(item) {
    this.horsesService.getHorse(item.id).subscribe(res => {
      this.horse = res.data
      this.horseKeys = Object.keys(this.horse);
    })
  }
  changeFormat(value) {
    let arr = value.split("-")
    this.horse.dob = arr[0] + '-' + arr[1] + '-' + arr[2];
  }
  onSubmit() {
    this.horse.horse_number = this.horse.horse_number.toString()
    this.horse.age_verified = this.horse.age_verified === 'true'
    var fun = this.editMode ? this.horsesService.updateHorse(this.horse) : this.horsesService.createHorse(this.horse)
    fun.subscribe(res => {
      this.getHorses()
      this.createForm = false
    })
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() textFromParent: string = '';

  @Input() mokitkhvaMshoblisgan: string = '';

  @Output() public dataFromChild: EventEmitter<any> = new EventEmitter();
  @Output() public pasukhiShvilisgan: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  sendData(){
    this.dataFromChild.emit(`hello from child component`);
  }
  sendAnswer(){
    this.pasukhiShvilisgan.emit(`I'm child component`);
  }

}

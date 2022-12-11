import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {



  parentText: string = 'parent text from component.ts';
  textFromParent1:string = 'text from parent';
  movikitkhotShvili: string = 'who are you?'
  shvilisgan: string = '';
  shvilmaMogvikitkha: string = '';

  constructor(){}
  ngOnInit(): void {
    
  }

  infoFromChild($event: any){
    this.shvilisgan = $event;
    console.log($event);
  }

  answerFromChild($event: any){
    this.shvilmaMogvikitkha = $event;
    console.log($event);
  }

}

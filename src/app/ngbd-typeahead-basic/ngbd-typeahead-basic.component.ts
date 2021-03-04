import { PostCodeDto } from './../dto/postcode.dto';
import { PostcodeService } from './../services/postcode.service';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngbd-typeahead-basic', templateUrl: './ngbd-typeahead-basic.component.html', styleUrls: ['./ngbd-typeahead-basic.component.css']
})
export class NgbdTypeaheadBasicComponent implements OnInit {

  constructor(private postCodeService: PostcodeService) { }

  ngOnInit(): void {
  }

  public model: any;

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(1000),
      filter(term => term.length > 1),
      distinctUntilChanged(),
      switchMap(term => this.postCodeService.lookupProds(term))
    );
  }

  formatter = (pcDto: PostCodeDto) => { 
   
    return pcDto.locality + ' ' + pcDto.postcode; };

}

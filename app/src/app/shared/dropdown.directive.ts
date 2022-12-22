import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    // close dropdown only on dropdown click
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    // close dropdown on click somewhere else
    @HostListener('document: click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}

}
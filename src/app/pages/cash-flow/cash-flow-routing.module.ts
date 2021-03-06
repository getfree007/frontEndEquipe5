import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';




const routes: Routes = [
    {
        path: 'input',
        component: InputComponent
    },
    {
        path: 'output',
        component: OutputComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CashFlowRoutingModule {}

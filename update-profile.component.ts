import { Component, OnInit } from '@angular/core';
import { DeliveryProfileServiceService } from 'src/app/utility/services/Delivery/delivery-profile-service.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UpdateDeliveryProfileService } from 'src/app/utility/services/Delivery/update-delivery-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  editProfile=new FormGroup({
    ProfileName:new FormControl('',Validators.required),
    ProfileEmail:new FormControl('',[Validators.email,Validators.required]),
    ProfilePhone:new FormControl('',Validators.required),
    ProfileAddress:new FormControl('',Validators.required),
    ProfileVehicle:new FormControl('',Validators.required)
    });
 
  constructor(private updateServ:DeliveryProfileServiceService,private update:UpdateDeliveryProfileService) {
        this.updateServ.getProfile().subscribe((res)=>{
          this.editProfile.setValue({
            ProfileName:res.name,
            ProfileEmail:res.email,
            ProfileAddress:res.address,
            ProfilePhone:res.contact,
            ProfileVehicle:res.vehicleno
          })
        })
   }

  ngOnInit(): void {
  }
  updateProfile(){
  const formData=this.editProfile.value;
  //console.log(formdata.ProfileName);
  console.log(formData);
  const data={
    
    name:formData.ProfileName,
    contact:formData.ProfilePhone,
    vehicleno:formData.ProfileVehicle,
    address:formData.ProfileAddress,
    email:formData.ProfileEmail

  }
 
  this.update.updateDeliveryProfile(data).subscribe()
  location.reload();
  }
 
}

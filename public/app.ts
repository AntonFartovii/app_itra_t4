M.Tabs.init(document.querySelectorAll('.tabs'));


const checkboxes = () => document.querySelectorAll('.select_user:checked');
const checkboxMain = document.querySelector('.select_all_users') as HTMLInputElement;
const btnUserDelete = document.getElementById('user_delete') as HTMLInputElement;
const btnUserBan = document.getElementById('user_ban') as HTMLInputElement;
const btnUserUnban = document.getElementById('user_unban') as HTMLInputElement;


checkboxMain.addEventListener('change', (e) => {
  console.log( e );
  document.querySelectorAll('.select_user')
    .forEach( elem => {
      (elem as HTMLInputElement).checked
      ? (elem as HTMLInputElement).checked = false
      : (elem as HTMLInputElement).checked = true
    } )
})



btnUserDelete.addEventListener('click',  (e:any) => {
  const name = e.target.dataset.name
  formSubmit( name )
})

btnUserBan.addEventListener('click',  (e:any) => {
  const name = e.target.dataset.name
  formSubmit( name )
})

btnUserUnban.addEventListener('click',  (e:any) => {
  const name = e.target.dataset.name
  formSubmit( name )
})

function formSubmit( name ) {
  let ids:string[] = [];

  const form = document.getElementById('users') as HTMLFormElement;
  const checkboxes = document.querySelectorAll('.select_user:checked') ;
  checkboxes.forEach( item => ids.push( item.id ))

  console.log( form );
  console.log( checkboxes );
  console.log( ids );

  form.action = `/users/${name}/`;
  form.method = 'POST';

  form.submit();
}


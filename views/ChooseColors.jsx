import React from 'react';
import DefaultLayout from './DefaultLayout';
import InputSimple from './InputSimple';

export default ({ user, colors }) => {
  const userColorHash = user.favoriteColors.reduce((coll, {id}) => ({
    ...coll,
    [id]:id
  }), {})
  console.log(userColorHash)
  return (
  <DefaultLayout title="Logged in!" user={user}>
    <div>
      <h2 className="subtitle is-2">Choose your favorite colors, {user.fname}</h2>


      <form action="/colors/faves" method="POST">
        <div >
          {
            colors.map(color => {
              const checked = (color.id in userColorHash) ? {defaultChecked:true}:{};
              return (
                        <InputSimple
                          color={color.dataValues}
                          {...checked}
                        />
            )})
          }
        </div>

        <input
          type="submit"
          className="button is-block is-info is-large"
          value="Save Colors"
        />
      </form>

    </div>
  </DefaultLayout>
)};

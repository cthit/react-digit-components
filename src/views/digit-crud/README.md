# DigitCRUD

Creates multiple routes for creating, reading (all or one), updating or deleting.

`if createRequest => /{name}/add`

`if readAllRequest => /{name}`

`if readOneRequest => /{name}/:id`

`if readOneRequest && updateRequest => /{name}/:id/edit`

`if deleteRequest => delete in /{name}/:id/edit`

You can use some request or all of them. Mix and match. 

The requests must return promises.

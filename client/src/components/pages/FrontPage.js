import React, { Fragment, useEffect, } from 'react'
import { MainLogo, } from '../styled-components'
import { BackToTop, PipButton, Scorebar, } from '../react-components'


const FrontPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        
    // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div style={{ height: '78vh', paddingBottom: '15vh' }}>
                <MainLogo 
                    src={window.innerWidth > 768
                        ?   require('../../assets/images/logo-long.png')
                        :   require('../../assets/images/logo-short.png')
                    } />

                <PipButton />
            </div>

            <Scorebar />

            <div style={{ width: '75%', margin: '35rem auto' }}>
                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>

                <p>Curabitur hendrerit, eros id viverra condimentum, massa ex
                mollis dolor, vitae hendrerit dolor nisl sed orci. Pellentesque
                maximus felis id malesuada facilisis. Suspendisse suscipit mi nec
                interdum tempor. Proin ut leo sit amet lacus malesuada semper vitae
                ut diam. Maecenas ante neque, viverra nec suscipit a, tristique
                eget libero. Ut et ornare libero. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam vel
                rhoncus tellus, sed condimentum lacus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed vulputate quis urna a vehicula. Donec consequat laoreet eros.
                Nullam eu ornare mauris. Morbi ut tortor et mi imperdiet lobortis.
                Aenean at viverra leo. In et leo laoreet, tristique tellus et,
                dignissim lectus. Suspendisse tincidunt est feugiat velit molestie,
                nec finibus eros scelerisque.</p>
            </div>
            
            <BackToTop />
        </Fragment>
    )
}


export { FrontPage }


/* 

*/
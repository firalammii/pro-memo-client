import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import './styles.css';
import { updatePost } from '../../actions/postActions';


const PostMUI = () => {
    const posts = useSelector((state) => state.postsReducer.posts);
    const dispatch = useDispatch();
    console.log(posts);
    return (
        <Container className='container' maxWidth='xl'>
            <Grid container spacing={1} className='container-grid' >
                {
                    !posts.length ? <CircularProgress />
                        : (
                            posts.map(post => (
                                <Grid item key={post._id} lg={2} sm={4} xs={6} md={3} className='post-item'>
                                    <Card className='card'>

                                        <CardMedia image={post.pic} className='image' />
                                        <Typography variant='h6' >{post.title}</Typography>
                                        <CardContent className='card-content'>
                                            <Typography variant='body1' gutterBottom>{post.body}</Typography>

                                            <Typography variant='body2' >{moment(post.date).fromNow()}</Typography>
                                            <Typography className='tags' variant='body2' >{post.tags.map(tag => `#${tag} `)}</Typography>
                                        </CardContent>
                                        <Button className='btn' onClick={() => dispatch(updatePost(post._id, { ...post, likes: post.likes + 1 }))} >{post.likes} likes <FavoriteBorderTwoToneIcon /></Button>
                                    </Card>

                                </Grid>
                            ))
                        )
                }

            </Grid>
        </Container >
    );
};

export default PostMUI;
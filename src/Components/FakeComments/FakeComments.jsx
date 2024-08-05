import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa6';
import { CustomReactStars } from '../../Components';

const FakeComments = ({getCommentStyle, comment}) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="comment">
            <div className="commentHead d-flex"
            style={{
                justifyContent:"space-between"
            }}>
                <div className="d-flex gap-2"
                style={{
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <span 
                    style={{
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center",
                        width:"40px",
                        height:"40px",
                        borderRadius:"3px",
                        border:"1px solid var(--color-borderSecLight)",
                        fontSize:"18px"
                    }}>
                        <FaUser />
                    </span>
                    <div className='d-flex'
                    style={{
                        flexDirection:"column",
                    }}>
                        <span
                        style={{
                            fontSize:"14px"
                        }}
                        >Ahmed Mohamed</span>
                        <span
                        style={{
                            fontSize:"11px",
                            color:"var(--font-secondaryColor)"
                        }}>{t("navbar.usernameLevel2")}</span>
                    </div>
                </div>
                <CustomReactStars
                    count={5}
                    value={5}
                    size={15}
                    edit={false}
                    activeColor="#ffd700"
                />
            </div>
            <p 
                className='commented'
                dir={'ltr'}
                style={getCommentStyle(comment.text)}
            >
                Nice Product I hope if there is yellow color.
            </p>
            </div>
            <div className="comment">
            <div className="commentHead d-flex"
            style={{
                justifyContent:"space-between"
            }}>
                <div className="d-flex gap-2"
                style={{
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <span 
                    style={{
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center",
                        width:"40px",
                        height:"40px",
                        borderRadius:"3px",
                        border:"1px solid var(--color-borderSecLight)",
                        fontSize:"18px"
                    }}>
                        <FaUser />
                    </span>
                    <div className='d-flex'
                    style={{
                        flexDirection:"column",
                    }}>
                        <span
                        style={{
                            fontSize:"14px"
                        }}
                        >Hamza Nayal</span>
                        <span
                        style={{
                            fontSize:"11px",
                            color:"var(--font-secondaryColor)"
                        }}>{t("navbar.usernameLevel2")}</span>
                    </div>
                </div>
                <CustomReactStars
                    count={5}
                    value={3}
                    size={15}
                    edit={false}
                    activeColor="#ffd700"
                />
            </div>
            <p 
                className='commented'
                dir={'ltr'}
                style={getCommentStyle(comment.text)}
            >
                Not Bad Maybe I will buy in another time.
            </p>
            </div>
            <div className="comment">
            <div className="commentHead d-flex"
            style={{
                justifyContent:"space-between"
            }}>
                <div className="d-flex gap-2"
                style={{
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <span style={{
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center",
                        width:"40px",
                        height:"40px",
                        borderRadius:"3px",
                        border:"1px solid var(--color-borderSecLight)",
                        fontSize:"18px"
                    }}>
                        <FaUser />
                    </span>
                    <div className='d-flex'
                    style={{
                        flexDirection:"column",
                    }}>
                        <span
                        style={{
                            fontSize:"14px"
                        }}
                        >Bakr Abu Hasiba</span>
                        <span
                        style={{
                            fontSize:"11px",
                            color:"var(--font-secondaryColor)"
                        }}>{t("navbar.usernameLevel2")}</span>
                    </div>
                </div>
                <CustomReactStars
                    count={5}
                    value={4}
                    size={15}
                    edit={false}
                    activeColor="#ffd700"
                />
            </div>
            <p 
                className='commented'
                dir={'ltr'}
                style={getCommentStyle(comment.text)}
            >
                I liked it, Simple and good colors. 
            </p>
            </div>
            <div className="comment">
                <div className="commentHead d-flex"
                style={{
                    justifyContent:"space-between"
                }}>
                    <div className="d-flex gap-2"
                    style={{
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <span style={{
                            display:'flex',
                            alignItems:"center",
                            justifyContent:"center",
                            width:"40px",
                            height:"40px",
                            borderRadius:"3px",
                            border:"1px solid var(--color-borderSecLight)",
                            fontSize:"18px"
                        }}>
                            <FaUser />
                        </span>
                        <div className='d-flex'
                        style={{
                            flexDirection:"column",
                        }}>
                            <span
                            style={{
                                fontSize:"14px"
                            }}
                            >Hassan Ibrahem</span>
                            <span
                            style={{
                                fontSize:"11px",
                                color:"var(--font-secondaryColor)"
                            }}>{t("navbar.usernameLevel2")}</span>
                        </div>
                    </div>
                    <CustomReactStars
                        count={5}
                        value={4}
                        size={15}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </div>
                <p 
                    className='commented'
                    dir={'ltr'}
                    style={getCommentStyle(comment.text)}
                >
                    I liked it, Simple and good colors. 
                </p>
            </div>
        </>
    )
}

export default FakeComments
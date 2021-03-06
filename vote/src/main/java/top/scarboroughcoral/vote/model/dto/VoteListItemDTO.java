package top.scarboroughcoral.vote.model.dto;

import top.scarboroughcoral.vote.model.entity.Vote;
import top.scarboroughcoral.vote.model.entity.Vote_Type;

import java.io.Serializable;


public class VoteListItemDTO implements Serializable {
    private Integer vote_id;
    private Integer meeting_id;
    private String vote_type_name;
    private String title;
    private String sub_title;
    private String vote_status;
    private boolean is_abstain;
    private Integer max_pass_number;
    private Integer pass_rate_mother;
    private Integer min_agree;
    private Integer max_agree;
    private Integer pass_rate_child;

    public VoteListItemDTO() {
    }

    public VoteListItemDTO(Integer vote_id, Integer meeting_id, String vote_type_name, String title, String sub_title, String vote_status, boolean is_abstain, Integer max_pass_number, Integer pass_rate_mother, Integer min_agree, Integer max_agree, Integer pass_rate_child) {
        this.vote_id = vote_id;
        this.meeting_id = meeting_id;
        this.vote_type_name = vote_type_name;
        this.title = title;
        this.sub_title = sub_title;
        this.vote_status = vote_status;
        this.is_abstain = is_abstain;
        this.max_pass_number = max_pass_number;
        this.pass_rate_mother = pass_rate_mother;
        this.min_agree = min_agree;
        this.max_agree = max_agree;
        this.pass_rate_child = pass_rate_child;
    }

    public VoteListItemDTO(Integer vote_id) {
        this.vote_id = vote_id;
    }

    public Integer getVote_id() {
        return vote_id;
    }

    public void setVote_id(Integer vote_id) {
        this.vote_id = vote_id;
    }

    public Integer getMeeting_id() {
        return meeting_id;
    }

    public void setMeeting_id(Integer meeting_id) {
        this.meeting_id = meeting_id;
    }

    public String getVote_type_name() {
        return vote_type_name;
    }

    public void setVote_type_name(String vote_type_name) {
        this.vote_type_name = vote_type_name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSub_title() {
        return sub_title;
    }

    public void setSub_title(String sub_title) {
        this.sub_title = sub_title;
    }

    public String getVote_status() {
        return vote_status;
    }

    public void setVote_status(String vote_status) {
        this.vote_status = vote_status;
    }

    public boolean isIs_abstain() {
        return is_abstain;
    }

    public void setIs_abstain(boolean is_abstain) {
        this.is_abstain = is_abstain;
    }

    public Integer getMax_pass_number() {
        return max_pass_number;
    }

    public void setMax_pass_number(Integer max_pass_number) {
        this.max_pass_number = max_pass_number;
    }

    public Integer getPass_rate_mother() {
        return pass_rate_mother;
    }

    public void setPass_rate_mother(Integer pass_rate_mother) {
        this.pass_rate_mother = pass_rate_mother;
    }

    public Integer getMin_agree() {
        return min_agree;
    }

    public void setMin_agree(Integer min_agree) {
        this.min_agree = min_agree;
    }

    public Integer getMax_agree() {
        return max_agree;
    }

    public void setMax_agree(Integer max_agree) {
        this.max_agree = max_agree;
    }

    public Integer getPass_rate_child() {
        return pass_rate_child;
    }

    public void setPass_rate_child(Integer pass_rate_child) {
        this.pass_rate_child = pass_rate_child;
    }
}
